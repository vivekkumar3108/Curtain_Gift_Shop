import React, { useState } from "react";
import {Link,Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Login from "./Login";
import './Design.css';
document.body.style.overflow = "hidden"

function Signup(){

const getInitialState = () => {
    const usertype = "user";
    return usertype;
  };
const [usertype, setUserType] = useState(getInitialState);
const[email,setEmail]=useState('');
const[username,setUsername]=useState('');
const[mobile,setMobile]=useState('');
const[password,setPassword]=useState('');
const[repassword,setRePassword]=useState('');

const options = [{label: "Admin",value: "admin",},{label: "User",value: "user",}];


const active = false;


const handleClick=(e)=>{
e.preventDefault()
const user={usertype,email,username, mobile, password, repassword,active}
console.log(user)
fetch("http://localhost:8080/user/signup",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)
}).then(()=>{alert("Registration Completed")})
}



    return (
    <>  
<div className="bg1">
<br></br>
<br></br>
<div className="titlebar">
        Register
    </div>

    <div className="form">
        <form >
        <br></br>
        
            <select value={usertype} onChange={(e)=>setUserType(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
            <br></br>
            <input placeholder = "Email" type = "email" id = "email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <input placeholder = "Username" type = "text" id =  "username" name = "username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
            <br></br>
            <input placeholder = "Mobile Number" type = "text" id =  "mobileNumber" name = "mobileNumber" value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
            <br></br>
            <input placeholder = "Password" type = "text" id =  "password" name = "password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br></br>
            <input placeholder = "Confirm Password" type = "text" id =  "confirmpassword" name = "confirmpassowrd" value={repassword} onChange={(e)=>setRePassword(e.target.value)}></input>
        </form>
        <div className="center">
        <button id = "submitButton" type='submit' value="Submit" onClick={handleClick}> Submit </button>
        </div>
        <br></br>
    </div>
    <p >Already an User?  < Link to = "/user/login" className="link"> Login</Link> </p>
    <p >Already an Admin?  < Link to = "/admin/login" className="link"> Admin Login</Link> </p>
    <br></br>
</div>
    </>)
}



export default Signup;
