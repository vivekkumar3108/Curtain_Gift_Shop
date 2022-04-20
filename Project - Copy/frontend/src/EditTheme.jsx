import {react, useState} from "react";
import {Link,Routes, Route, Navigate, BrowserRouter, useLocation} from 'react-router-dom';

function EditTheme (){
    function logout(){
        localStorage.removeItem('to');
      };
const location = useLocation();
var f = location.state.id;
var id = f;
const[themeName,setTheme_Name]=useState('');
const[themePrice,setTheme_Price]=useState('');
const[themeDesc,setTheme_Desc]=useState('');
const [user,setUser] = useState(localStorage.getItem('to'));
const handleClick=(e)=>{
e.preventDefault()
const theme={id,themeName,themePrice,themeDesc}
console.log(theme)
fetch("http://localhost:8080/admin/updateTheme",
{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(theme)
}).then(()=>{alert("Theme Submitted")})
}


if(user!=null){
    return <>
<div class="topnav">
<a className="pad" id="">Curtain Gifts</a> 
        <a id="AdminGifts"> < Link to = "/admin/addGIft" className="link"> Gift </Link> </a>
        <a id="AdminThemes"> < Link to = "/admin/addTheme" className="link"> Themes </Link> </a>
        <a id="AdminOrders"> < Link to = "/admin/orders" className="link"> Orders </Link> </a>
        <a className="padr"> < Link to="/admin/login" className="link"><button onClick={() => logout()}>Logout</button></Link></a>
</div> 


<div id = "editThemeBody">
<br></br><br></br><br></br>
<br></br><br></br><br></br>

 <div  className="form" >
     <br></br>
     <br></br>
 <div className="titlebar"> 
        Edit Theme
    </div>

        <br></br>
        <form >
            <input placeholder = "Enter the Theme Name" type = "text" id = "EditThemeName" name='enterThemeName' value={themeName} onChange={(e)=>setTheme_Name(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Theme Price" type = "number" id =  "EditThemePrice" name = "enterThemePrice" value={themePrice} onChange={(e)=>setTheme_Price(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Theme Details" type = "text" id =  "EditThemeDetails" name = "enterGiftDetails" value={themeDesc} onChange={(e)=>setTheme_Desc(e.target.value)}></input>
            <br></br>
        </form>
        <div className="center">
        <button  id = "updateThemeButton" type='submit' value="Submit" onClick={handleClick}> UPDATE </button>
        <br></br>
        <br></br><br></br>
        </div> </div>
</div>
    </>}
    else{
        return(<Navigate to="/admin/login" replace={true} />)
    }
}

export default EditTheme