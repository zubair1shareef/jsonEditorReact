import React,{useState} from 'react'
import './login.css'

import {Routes, Route, useNavigate} from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function submitForm(e){
        e.preventDefault()

        console.log(username)
        if(username=='admin' && password=='admin'){
            navigate('/editor');
        }
      else{
        alert("wrong username and password")
      }
   
    }
  return (

    <div class="box">
 <form>
    
    <div class="login-form">
      
      <label >Username</label>
      <input type="text" id="username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
      
      <label >Password</label>
      <input type="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>
    <input type="submit" id="submit" value="Login" onClick={submitForm}/>
    <a href="register.htm" class="register">Register!</a>
    <a href="#" class="forgot-password" title="Forgot password?">Forgot?</a>
    </form>
    </div>
  )
}

export default Login