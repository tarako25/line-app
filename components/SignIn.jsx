import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "pages/firebase.js"

function SignIn() {
    function signInGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
        <Button onClick={signInGoogle}>Googoleでログインする</Button>
    </div>
  )
}

export default SignIn