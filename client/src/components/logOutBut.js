import React from "react";
import { useHistory } from "react-router-dom";
import fakeAuth from '../utils/authContext'

function AuthButton() {
    let history = useHistory();
  
    return  (

        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
          className="nav-link"
        >
          Sign out
        </button>

    ) 
  }

  export default AuthButton