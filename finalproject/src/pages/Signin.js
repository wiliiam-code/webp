import React from 'react';
import{Menu,Form,Container,Message} from 'semantic-ui-react';
import firebase from  '../utills/firebase' ;
import "firebase/auth";
import { useHistory }from'react-router-dom';
function Signin()
{
    const history=useHistory();
    const[activeItem, setActiveItem] = React.useState('signin');
    const[email, setEmail]=React.useState('');
    const[password, setPassword]=React.useState('');
    const[errorMessage,setErrorMessage]=React.useState(" ");
    const[isLoading,setIsloading]=React.useState(false);
        
    function onSubmit(){
        setIsloading(true);
        if(activeItem==='register'){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,passsword)
            .then(() => {
                history.push('/');
                setIsloading(false);
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/email-already-in-use":
                        setErrorMessage('此信箱已有人使用');
                        break;
                    case "auth/invalid-email":
                        setErrorMessage('信箱格式錯誤');
                        break;
                        default:
                }
                setIsloading(false);
            });
        }else if(activeItem==='signin'){
            firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(() => {
                history.push('/');
                setIsloading(false);
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/user-not-found":
                        setErrorMessage('此信箱不存在');
                        break;
                    case "auth/invalid-email":
                        setErrorMessage('信箱格式錯誤');
                        break;
                    case "auth/wrong-password":
                        setErrorMessage('密碼錯誤');
                        break;
                        default:
                }
                setIsloading(false);
            });
        }
    }
        return <Container>
            <Menu widths="2">
                <Menu.Item
                active={activeItem==='register'}
                onClick={()=>{
                    setErrorMessage('');
                    setActiveItem('register')}}
                >註冊</Menu.Item>
                <Menu.Item
                active={activeItem==='signin'}
                onClick={()=>{
                    setErrorMessage('');
                    setActiveItem('signin')}}
                >登入</Menu.Item>
            </Menu>
            <Form onSubmit={onSubmit}>
                <Form.Input label="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                 placeholder="please enter your email"/>
                <Form.Input label="password" 
                value={password} 
                onChange={(p) => setPassword(p.target.value)} 
                placeholder="please enter your password"
                type="password"/>
                {errorMessage && <Message negative>{errorMessage}</Message>}
                <Form.Button loading={isLoading}>
                    {activeItem==='register'&&'註冊'}
                    {activeItem==='signin'&&'登入'}
                </Form.Button>
            </Form>
        </Container>;
}

export default Signin;