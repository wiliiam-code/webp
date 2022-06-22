import {Container,Header,Form,Image,Button}from 'semantic-ui-react';
import React from 'react';
import 'firebase/firestore';
import 'firebase/storage';
import firebase from '../utills/firebase';
import {useHistory}from 'react-router-dom';
function NewPost()
{
    const history = useHistory();
    const [title,setTitle] = React.useState('');
    const [content,setContent]=React.useState('');
    const [file,setFile]=React.useState(null);

const previewUrl = file 
 ? URL.createObjectURL(file) 
 :'https://react.semantic-ui.com/images/wireframe/image.png'; 
function onSubmit()
{
    const documentRef = firebase.firestore().collection("posts").doc();
    const fileRef = firebase.storage().ref('post-images/' + documentRef.id);
    const metadata = {
        contentType : file.type
    }
    fileRef.put(file,metadata).then(() =>{
        fileRef.getDownloadURL().then((imageUrl) => {
            documentRef.set({
                title,
                content,
                createtime: firebase.firestore.Timestamp.now(),
                author:{
                    displayName:firebase.auth().currentUser.displayName || "",
                    photoURL: firebase.auth().currentUser.photoURL || '',
                    uid:firebase.auth().currentUser.uid,
                    email: firebase.auth().currentUser.email,
                },
                imageUrl,
            }).then(() => {
                history.push('/');
            })
        })
    })
}
return (
<Container>
<Header>
    New post!
</Header>
<Form onSubmit={onSubmit}>
    <Image 
     src = {previewUrl}
     size ="medium" 
     floated = "left"
     />
    <Button basic as="label" htmlFor="post-image">ADD PHOTO</Button>
    <Form.Input 
     type = "file" 
     id="post-image" 
     style={{display:'none'}} 
     onChange = {(e) => setFile(e.target.files[0])}
     />
    <Form.Input 
     placeholder="PLease enter your post topic."
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     />
     <Form.TextArea 
     placeholder="PLease enter your post content."
     value={content}
     onChange={(e) => setContent(e.target.value)}
     />
     <Form.Button> Post </Form.Button>
</Form>
</Container>);
}

export default NewPost;