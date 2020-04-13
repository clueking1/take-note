import React, { useRef } from 'react'
import Navbar from '../../components/navBar'
import API from '../../utils/API'
import LogBut from '../../components/logBut'
import './home.css'

function Home() {

    const username = useRef();
    const password = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        API.login({
            username: username.current.value,
            password: password.current.value
        })
        .catch(err => {
            if (err) {
                throw err
            }
        })

        
      };

 return (
     <div>
     <div>
        <Navbar /> 
    </div>

        <div>
            <form className="loginForm form-signin" onSubmit={handleSubmit}>
            <h1 className="headerName">Take Note</h1>
            <h4><i className="subName">Of Whats Most Important</i></h4>
                <input 
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                required ref={username}
                />

                <input 
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                required ref={password}
                />   

       

                <LogBut />     
                <a className="signUp btn btn-lg btn-primary btn-block" href="/signup">Sign Up</a>
            </form>

        
        </div>
        </div>
       
    )   
}

export default Home