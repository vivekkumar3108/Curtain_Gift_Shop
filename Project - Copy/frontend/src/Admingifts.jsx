
import React, { useState, useEffect } from "react";
import {Link,Routes, Route, Navigate, BrowserRouter,useNavigate} from 'react-router-dom';
import './Design.css';

export default function AdminGifts(Gifts){

const[giftName,setGiftName]=useState('');
const[giftPrice,setGiftPrice]=useState('');
const[imageURL,setImageURL]=useState('');
const[giftDesc,setGiftDesc]=useState('');
const[giftQuantity,setGiftQuantity]=useState('');
const [user,setUser] = useState(localStorage.getItem('to'));
const[gifts,setGifts]=useState([]);
function logout(){
    localStorage.removeItem('to');
  };
const handleClick=(e)=>{
e.preventDefault()
const gift={giftName,giftPrice,imageURL,giftDesc,giftQuantity}
console.log(gift)
fetch("http://localhost:8080/admin/addGift",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(gift)
}).then(()=>{alert("Gift Submitted")})
}

useEffect(()=>{
  fetch("http://localhost:8080/admin/viewGift")
  .then(res=>res.json())
  .then((result)=>{
    setGifts(result);
  }
)
})

const redirect = (id) => {
fetch(`http://localhost:8080/admin/deleteGift?id=${id}`,
{
method:"DELETE",
headers:{"Content-Type":"application/json"},
}).then(()=>{alert("GIft Deleted")})
}


const navigate = useNavigate();

const toUpdate=(id)=>{
let idx = id;
navigate('../admin/updateGift',{state:{id:idx}});
  }
if(user!=null){
    return <>

<div class="topnav">
<a className="pad" id="">Curtain Gifts</a> 
        <a id="AdminGifts"> < Link to = "/admin/addGift" className="link"> Gift </Link> </a>
        <a id="AdminThemes"> < Link to = "/admin/addTheme" className="link"> Themes </Link> </a>
        <a id="AdminOrders"> < Link to = "/admin/orders" className="link"> Orders </Link> </a>
        <a className="padr"> < Link to="/admin/login" className="link"><button onClick={() => logout()}>Logout</button></Link></a>
</div> 

<br></br><br></br>


<div className="menunav">
    < a className="padr1">Image</a>
    <a>Gift Name</a>
    <a>Price</a>
    <a>Quantity</a>
</div>


<div style={{ float:"Left",width:"56%", margin:"10px"}}>
        <br/>
        <div className="ScrollStyle">
            <div>
            {gifts.map(gift => {
            return(
                <div> 
                    < div className="box" id = {gift.id}> 
                    {gift.imageURL}
                    <t/>                  
                    {gift.giftName} 
                    <t/>
                    {gift.giftPrice}
                    <t/>
                    {gift.giftQuantity}
                    <t/>
                    {gift.giftDesc}
                    <t/>
                   <button onClick={()=>toUpdate(gift.id)}> Edit </button>
                <button onClick={()=>redirect(gift.id)}> Delete </button>
                    </div>
                <br/>
                </div>
            )
        })}
            </div>
        </div>
    </div>



<div className="addgift">
    <br/> <br/> <br/>
<div className="titlebar"> 
        Add Gifts
    </div>
    <div  className="form">
        <br></br>
        <br></br>
        <form >
            <input placeholder = "Enter the Gift Name" type = "text" id = "enterGiftName" name='enterGiftName' value={giftName} onChange={(e)=>setGiftName(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Price" type = "number" id =  "enterGiftPrice" name = "enterGiftPrice" value={giftPrice} onChange={(e)=>setGiftPrice(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Image URL" type = "text" id =  "enterGiftImageUrl" name = "enterGiftImageUrl" value={imageURL} onChange={(e)=>setImageURL(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Product Quantity" type = "number" id =  "enterGiftQuantity" name = "enterGiftQuantity" value={giftQuantity} onChange={(e)=>setGiftQuantity(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Details" type = "text" id =  "enterGiftDetails" name = "enterGiftDetails" value={giftDesc} onChange={(e)=>setGiftDesc(e.target.value)}></input>
            <br></br>
        </form>
        <div className="center">
        <button  id = "submitButton" type='submit' value="Submit"  onClick={handleClick}> ADD </button>
        <br></br>
        </div>
        <br></br>
    </div>
    <br/>
</div>
    </>


}
else{
    return(<Navigate to="/admin/login" replace={true} />)
}
}
