import * as React from 'react';
import TextField from '@mui/material/TextField';

const username = () =>{
   var abc = <div>
      <TextField
          id="outlined"
          label="Email Address"
          autoComplete="current-password"
        />
   </div>;
   return abc;
}
export default username;

/*
const username = () =>{
   var abc = <div>User Name: &ensp; <input placeholder="Enter User Name"/></div>;
   return abc;
}
export default username;
*/