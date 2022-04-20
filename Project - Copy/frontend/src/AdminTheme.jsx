import React, { useState , useEffect} from "react";
import {Link, useNavigate, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';



function AdminTheme () {
    function logout(){
        localStorage.removeItem('to');
      };
const redirect = (id) => {
fetch(`http://localhost:8080/admin/deleteTheme?id=${id}`,
{
method:"DELETE",
headers:{"Content-Type":"application/json"},
}).then(()=>{alert("Theme Deleted")})
}

const[themeName,setTheme_Name]=useState('');
const[themePrice,setTheme_Price]=useState('');
const[themeDesc,setTheme_Desc]=useState('');
const[themes,setThemes]=useState([]);
const [user,setUser] = useState(localStorage.getItem('to'));

const handleClick=(e)=>{
e.preventDefault()
const theme={themeName,themePrice,themeDesc}
console.log(theme)
fetch("http://localhost:8080/admin/addTheme",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(theme)
}).then(()=>{alert("Theme Submitted")})
}


const navigate = useNavigate();
const toUpdate=(id)=>{
let idx = id;
navigate('../admin/updateTheme',{state:{id:idx}});
  }


useEffect(()=>{
  fetch("http://localhost:8080/admin/viewTheme")
  .then(res=>res.json())
  .then((result)=>{
    setThemes(result);
  }
)
})

if(user!=null){
return <>
<div class="topnav">
<a className="pad" id="">Curtain Gifts</a> 
        <a id="AdminGifts"> < Link to = "/admin/addGift" className="link"> Gift </Link> </a>
        <a id="AdminThemes"> < Link to = "/admin/addTheme" className="link"> Themes </Link> </a>
        <a id="AdminOrders"> < Link to = "/admin/orders" className="link"> Orders </Link> </a>
        <a className="padr"> < Link to="/admin/login" className="link"><button onClick={() => logout()}>Logout</button></Link></a>
</div>  

    <div style={{ float:"Left",width:"65%",margin:"15px"}}>
        <br/>
        <div style={{ width:"100%", marginLeft :"5%"}}>
        <form action="" method="get">
        <label htmlFor="header-search"></label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Themes"
            name="" 
            style={{ widthY:"50%"}}
        />
        <button type="submit" >Search</button>
        </form>
        </div>

        <br/><br/><br/>
        <div className="ScrollStyle">
            <div>
            {themes.map(theme => {
            return(
                <div> 
                    < div className="box" id = {theme.id}> 
                    Theme Name : {theme.themeName} 
                    <br/>
                    Theme Price : {theme.themePrice}
                    <br/>
                    Theme Details : {theme.themeDesc}
                    <t/>
                    <div>
                    <button onClick={()=>toUpdate(theme.id)}> Edit </button>
                    <button onClick={()=>redirect(theme.id)}> Delete </button>
                    </div>

                    </div>
                <br/>
                </div>

            )
        })}
            </div>
        </div>

    </div>


       
    <div>
        <br/><br/><br/><br/><br/><br/>
    <div className="addTheme" style={{ marginRight:"5px",  float:"Right" , width:"30%", backgroundImage:"https://c1.wallpaperflare.com/preview/474/969/244/leather-textures-background-fabric.jpg"}}>
            <br/><br/><br/>
            <div className="titlebar"> 
            Add Themes
            </div>
            <div  className="form">
            <br></br>
            <br></br><br/>
            <form >
            <input placeholder = "Enter Theme Name" type = "text" id = "enterThemeName" name='enterThemeName' value={themeName} onChange={(e)=>setTheme_Name(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Theme Price" type = "number" id =  "enterThemePrice" name = "enterThemePrice" value={themePrice} onChange={(e)=>setTheme_Price(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Theme Description" type = "text" id =  "enterThemeDescription" name = "enterThemeDescription" value={themeDesc} onChange={(e)=>setTheme_Desc(e.target.value)}></input>
            <br></br>
            </form>
            <br/>
            <div className="center">
            <button  id = "submitButton" type='submit' value="Submit" onClick={handleClick}> ADD </button>
            <br></br>
            </div>
            <br></br>
            </div>
            <br/>
        </div>
    </div>




    </>}
    else{
        return(<Navigate to="/admin/login" replace={true} />)
    }
}

export default AdminTheme;