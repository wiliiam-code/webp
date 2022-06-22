import { Menu, Search } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import React from "react";
import firebase from './utills/firebase';

function Header()
{
    const[user,setUser] = React.useState(null);
    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged((currentUser)=>{
            setUser(currentUser);
        });
    },[]);
    return (
    <Menu>
     <Menu.Item as = {Link} to="/">
            Sayn
            </Menu.Item>
        <Menu.Item>
        </Menu.Item>
        <Menu.Menu position='right'>
        {user ?
        (<>
            <Menu.Item as ={Link} to ="/new-post">
            貼文
            </Menu.Item>
            <Menu.Item as ={Link} to ="/my">
            自介
            </Menu.Item>
            <Menu.Item onClick={() => firebase.auth().signOut()}>
            登出
            </Menu.Item>
            </>):(
           <Menu.Item as ={Link} to ="/Signin">
            註冊/登入
            </Menu.Item>
            )}
        </Menu.Menu>
    </Menu>
    );
}

export default Header;