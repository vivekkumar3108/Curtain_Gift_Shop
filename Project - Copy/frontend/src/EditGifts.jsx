import {react, useState} from "react";
import {Link,Routes, Route, Navigate, BrowserRouter, useLocation} from 'react-router-dom';



function EditGift (){
    function logout(){
        localStorage.removeItem('to');
      };

const location = useLocation();
var f = location.state.id;
var id = f;
const[giftName,setGiftName]=useState('');
const[giftPrice,setGiftPrice]=useState('');
const[imageURL,setImageURL]=useState('');
const[giftDesc,setGiftDesc]=useState('');
const[giftQuantity,setGiftQuantity]=useState('');
const [user,setUser] = useState(localStorage.getItem('to'));
const handleClick=(e)=>{
e.preventDefault()
const gift={id,giftName,giftPrice,imageURL,giftDesc,giftQuantity}
console.log(gift)
fetch("http://localhost:8080/admin/updateGift",
{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(gift)
}).then(()=>{alert("Gift Submitted")})
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


<div id = "editGiftBody">
<br></br><br></br><br></br>
<br></br><br></br><br></br>

 <div  className="form" >
     <br></br>
     <br></br>
 <div className="titlebar"> 
        Edit Gifts
    </div>

        <br></br>
        <form >
            <input placeholder = "Enter the Gift Name" type = "text" id = "EditGiftName" name='enterGiftName' value={giftName} onChange={(e)=>setGiftName(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Price" type = "number" id =  "EditGiftPrice" name = "enterGiftPrice" value={giftPrice} onChange={(e)=>setGiftPrice(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Image URL" type = "text" id =  "EditGiftImageUrl" name = "enterGiftImageUrl" value={imageURL} onChange={(e)=>setImageURL(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Product Quantity" type = "number" id =  "EditGiftQuantity" name = "enterGiftQuantity" value={giftQuantity} onChange={(e)=>setGiftQuantity(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter the Gift Details" type = "text" id =  "EditGiftDetails" name = "enterGiftDetails" value={giftDesc} onChange={(e)=>setGiftDesc(e.target.value)}></input>
            <br></br>
        </form>
        <div className="center">
        <button  id = "updateGiftButton" type='submit' value="Submit"  onClick={handleClick}> UPDATE </button>
        <br></br>
        <br></br><br></br>
        </div> </div>
</div>
</>}
else{
    return(<Navigate to="/admin/login" replace={true} />)
}
}


export default EditGift;