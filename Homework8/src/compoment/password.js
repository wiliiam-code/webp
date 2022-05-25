import * as React from 'react';
import TextField from '@mui/material/TextField';

const password = () =>{
    var abc = <div >
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </div >;
    return abc;
}
export default password;

/*
const password = () =>{
    var abc = <div >Password : &ensp; <input type = "password" placeholder="Password"></input ></div >;
    return abc;
}
export default password;
*/