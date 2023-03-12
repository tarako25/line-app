import Line from '@/components/Line.jsx';
import SignIn from '@/components/SignIn'
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase.js";

function index() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line/> : <SignIn/>}
    </div>
  )
}

export default index