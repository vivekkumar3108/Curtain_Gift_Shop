import {React , useState } from "react";
import ReactDOM from "react-dom";
import {Link,Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import AdminGifts from "./Admingifts";
import Homepage from "./Homepage";
import './Design.css';


export default function Login()
{
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[activechecker,setActiveChecker]=useState('');
const active = false;

const handleClick=(e)=>{
e.preventDefault()
const user={email, password}
console.log(user);
fetch("http://localhost:8080/user/login",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)
}).then(response=>response.json().then(res=>setActiveChecker(res)))
localStorage.setItem('to',email);
}

console.log(activechecker);
if(!activechecker){
    return(
    <div className="bg">
    <br></br>
    <br></br>
     <div  className="titlebar"> 
        Login
    </div>
    <div  className="form">
        <br></br>
        <br></br>
        <form>
            <input placeholder = "Email" type = "text" id = "email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <input placeholder = "Password" type = "text" id =  "password" name = "password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br></br>
        </form>
        <div className="center">
        <button  id = "submitButton" type='submit' value="Submit" onClick={handleClick}> Submit </button>
        <br></br>
        </div>
        <br></br>
    </div>
    <p >Not a Member? <Link to = "/" className="link"> Signup</Link></p>
    <br></br>
    </div>
     
);}else{
    return(<Navigate to="/home" replace={true} />);
}
}
