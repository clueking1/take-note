import React from "react";
import { useHistory } from "react-router-dom";
import fakeAuth from '../utils/authContext'


  function LoginPage() {
    let history = useHistory();
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace('/member');
      });
    };
  
    return (
      <div>
        <button onClick={login} type="submit" className="btn btn-lg btn-primary btn-block">Log in</button>
      </div>
    );
  }

  export default LoginPage