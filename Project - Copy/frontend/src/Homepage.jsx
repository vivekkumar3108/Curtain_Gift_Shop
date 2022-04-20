import React, { useState , useEffect} from "react";
import {Link,Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import './Design.css';

function Homepage(){
  const [user,setUser] = useState(localStorage.getItem('to'));
  console.log(user);
  function logout(){
    localStorage.removeItem('to');
  };

const[gifts,setGifts]=useState([]);
useEffect(()=>{
  fetch("http://localhost:8080/admin/viewGift")
  .then(res=>res.json())
  .then((result)=>{
    setGifts(result);
  }
)
},[])
if(user!=null){
return(
<>
<div className="topnav">
<a className="pad" id="">Curtain Gifts</a> 
        <a id="productHomeButton"> <Link to = "/home" className="link"> Home  </Link> </a>
        <a id="productOrderButton"> < Link to = "/user/orders" className="link"> Orders </Link> </a>
<a className="padr"> < Link to="/user/login" className="link"><button onClick={() => logout()}>Logout</button></Link></a>
</div> 

        <br/>
        <div className="scroll">
            {gifts.map(gift => {
            return(
    
                <a href={'http://localhost:3000/user/cart?id=' + gift.id}>
             <div className="space" >
                
                <div className="product"  > 
                    < div  id = {gift.id} > 
                  <center> 
                      <img src={gift.imageURL}/>  
                      <h3> "{gift.giftName}             ${gift.giftPrice}"</h3> 
                   <p className="p1"> Quantity: {gift.giftQuantity} </p> 
                   <p className="p1">   {gift.giftDesc} </p>  
                  </center>               
                    </div>
                </div>
                
            </div>
            </a>
            )
        })}
        </div>
</>

);}
else{
  return(<Navigate to="/user/login" replace={true} />)
}

}
export default Homepage;