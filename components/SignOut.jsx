import { Button } from '@mui/material'
import React from 'react'
import {auth} from "pages/firebase.js"
import CallIcon from "@mui/icons-material/Call"

function SignOut() {
  return (
    <div class="header">
        <Button
        style={{ color:"white",fontsize:"15px"}}
        onClick={() => auth.signOut()}>サインアウト
        </Button>
        <h3>
          {auth.currentUser.displayName}
        </h3>
        <CallIcon />
    </div>
  )
}

export default SignOut