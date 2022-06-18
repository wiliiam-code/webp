import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkIcon from '@mui/icons-material/Link';
import './App.css';
/*
參考:https://ithelp.ithome.com.tw/articles/10221020
*/


class UserProfile extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            login: '', 
            id: '',
            node_id: '',
            avatar_url: '',
            gravatar_id: '',
            url: '',
            html_url: '',
            followers_url: '',
            following_url: '',
            gists_url: '',
            starred_url: '',
            subscriptions_url: '',
            organizations_url: '',
            repos_url: '',
            events_url: '',
            received_events_url: '',
            type: '',
            site_admin: '',
            name: '',
            company: '',
            blog: '',
            location: '',
            email: '',
            hireable: '',
            bio: '',
            twitter_username: '',
            public_repos: '',
            public_gists: '',
            followers: '',
            following: '',
            created_at: '',
            updated_at: ''
        } 
    } 

    //呼叫API
    componentDidMount() { 
        fetch('https://api.github.com/users/cjwu')
            .then(response => response.json())
            .then(data => {
                /*接到request data後要做的事情*/
                this.setState({
                    login:data['login'],
                    id: data['id'],
                    node_id: data['node_id'],
                    avatar_url: data['aavatar_url'],
                    gravatar_id: data['gravatar_id'],
                    url: data['url'],
                    html_url: data['html_url'],
                    followers_url: data['followers_url'],
                    following_url: data['following_url'],
                    gists_url: data['gists_url'],
                    starred_url: data['starred_url'],
                    subscriptions_url: data['subscriptions_url'],
                    organizations_url: data['organizations_url'],
                    repos_url: data['repos_url'],
                    events_url: data['events_url'],
                    received_events_url: data['received_events_url'],
                    type: data['type'],
                    site_admin: data['site_admin'],
                    name: data['name'],
                    company: data['company'],
                    blog: data['blog'],
                    location: data['location'],
                    email: data['email'],
                    hireable: data['hireable'],
                    bio: data['bio'],
                    twitter_username: data['twitter_username'],
                    public_repos: data['public_repos'],
                    public_gists: data['public_gists'],
                    followers: data['followers'],
                    following: data['following'],
                    created_at: data['created_at'],
                    updated_at: data['updated_at']
                }  
                )
            })
        
    } 

    render() { 
        return ( 
            <Box
                sx={{ my: 4, mx: 8,width: '40%',border: 1 }}

            >
                <img
                    src="https://avatars.githubusercontent.com/u/1336309?v=4"
                    alt="一張圖片"
                    className='square'
                >
                </img>
                <h3>{this.state.name}</h3> 
                <p>{this.state.login}</p>
                <button>Edit profile</button>
                <Grid container spacing={0.5}>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <PersonIcon />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>{this.state.followers} followers</p>
                    </Grid>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <PersonOutlineIcon />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>{this.state.following} following</p>
                    </Grid>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <StarBorderIcon />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>{this.state.public_gists}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={0.5}>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <LocationOnIcon />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>{this.state.location}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={0.5}>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <MailIcon/>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>email:{this.state.email}</p>
                    </Grid>
                </Grid>
                <Grid container spacing={0.5}>
                    <Grid item xs={12} sm={0.5} sx={{my:2}}>
                        <LinkIcon />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <p>{this.state.blog}</p>
                    </Grid>
                </Grid>
            </Box>
        ); 
    } 
} 


export default UserProfile;