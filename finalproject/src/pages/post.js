import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container, Image, Header, Segment,Icon ,Comment,Form} from 'semantic-ui-react';
import firebase from '../utills/firebase';

function Post() {
    const { postId } = useParams();
    const [post, setPost] = React.useState({
        author: {},
    });
    const [commentContent, setCommentContent] = React.useState("");
    const [comments, setComments] = React.useState([]);
    React.useEffect(() => {
        firebase
        .firestore()
        .collection("posts")
        .doc(postId)
        .onSnapshot((docSnapshot) => {
            const data =docSnapshot.data();
            setPost(data);
        })
    },[])

    React.useEffect(() => {
        firebase
        .firestore()
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("createtime","desc")
        .onSnapshot((collectionSnapshot) => {
            const data = collectionSnapshot.docs.map(doc => {
                return doc.data();
            });
            setComments(data);
        });
    },[]);

    function toggleLiked()
    {
        const uid = firebase.auth().currentUser.uid;
        if(isLiked){
            firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
                likedBy : firebase.firestore.FieldValue.arrayRemove(uid),
            });
        }
        else{
            firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
                likedBy:firebase.firestore.FieldValue.arrayUnion(uid),
            });
        }
    }

    const isLiked =post.likedBy?.includes(
        firebase.auth().currentUser.uid
    );

    function onSubmit(){
        const firestore = firebase.firestore();
        const batch = firestore.batch();
        const postRef = firestore.collection('posts').doc(postId);
        batch.update(postRef, {
            commentsCount:firebase.firestore.FieldValue.increment(1)
        })
       const commentRef = postRef.collection('comments').doc();
        batch.set(commentRef, {
            content:commentContent,
            createtime:firebase.firestore.Timestamp.now(),
            author:{
                uid: firebase.auth().currentUser.uid,
                displayName: firebase.auth().currentUser.displayName || '',
                photoURL:firebase.auth().currentUser.photoURL || '',
            },
        });
        batch.commit().then(() =>{
            setCommentContent('');
        });
    }

    return ( 
    <Container>
    <Grid>
        <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
                {post.author.photoURL ? (
                <Image src={post.author.photoURL} />
                ) : (
                <Icon name="user circle"/>
                )}{' '}
                {post.author.diplayName || '使用者'}
                <Header>
                    {post.title}
                    <Header.Subheader>
                        {post.createtime?.toDate().toLocaleDateString()}
                    </Header.Subheader>
                </Header>
                <Image src={post.imageUrl} />
                <Segment basic vertical>{post.content}</Segment>
                <Segment basic vertical>
                    留言 {post.commentsCount || 0} ． 讚 {post.likedBy?.length || 0} ．
                    <Icon 
                      name={`thumbs up $ {isLiked ? '' : ' outline'}`}
                      color = {isLiked ? 'blue':'grey'}
                      link
                      onClick={toggleLiked}
                      />
                </Segment>
                <Comment.Group>
                    <Form reply>
                        <Form.TextArea value={commentContent} onChange={(e) => setCommentContent(e.target.value)}/>
                        <Form.Button onClick={onSubmit}>
                            Comment
                        </Form.Button>
                    </Form>
                    <Header>
                    共{post.commentsCount || 0} 則留言
                </Header>
                {comments.map((comments) =>{
                    return(
                <Comment>
                    <Comment.Avatar src ={comments.author.photoURL} />
                    <Comment.Content>
                        <Comment.Author as="span">{comments.author.displayName || "使用者" }</Comment.Author>
                        <Comment.Metadata>{comments.createtime.toDate().toLocaleString()}</Comment.Metadata>
                        <Comment.Text>{comments.content}</Comment.Text>
                    </Comment.Content>
                </Comment>
                    );
                })}
                </Comment.Group>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
    );
}

export default Post;