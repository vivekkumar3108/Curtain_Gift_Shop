import React, { useState , useEffect} from "react";
import {Link,Routes, Route, Navigate,useNavigate, BrowserRouter} from 'react-router-dom';
import './Design.css';

export default function UserOrders(){

    const user = localStorage.getItem('to');
    console.log(user);
    const logout=()=>{
    localStorage.removeItem('to');
    };
  const [data,setData]=useState([]);
  useEffect(() => {getData()},[]);
  const getData= ()=>{
    fetch(`http://localhost:8080/viewmycart?username=${user}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response)
        return response.json();
      }).then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      }) .catch((error) => {
        console.log(error);
      });
  };
let datas = JSON.stringify(data);
  const navigate = useNavigate();

  const toUpdate=(id)=>{
let idx = id;
navigate('../user/EditCart',{state:{id:idx}});
  }
  const redirect = (id) => {
    fetch(`http://localhost:8080/user/deleteCart?id=${id}`,
    {
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    }).then(()=>{alert("Theme Deleted")})
    }


    const saveOrder=(datas)=>{
      fetch("http://localhost:8080/user/addOrder",
      {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:datas
    }).then(()=>{alert("Order Placed")})
      }
    console.log("---->"+datas);

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
              {data.map(cart => {
              return(
               <div className="space1" >
                  <div className="product1"  > 
                      < div  id = {cart.id} > 
                    <center> 
                        <h3> "{cart.giftname}             ${cart.orderprice}"</h3> 
                     <p className="p1"> Order Name:  {cart.ordername} </p> 
                     <p className="p1"> Phone {cart.orderphone} </p> 
                     <p className="p1"> Theme Name: {cart.themename} </p>  
                     <p className="p1"> Date: {cart.orderdate} </p>  
                     <p className="p1"> Address: {cart.orderaddress} </p>  
                     <p className="p1"> Description: {cart.orderdesc} </p>  

                     <button onClick={()=>toUpdate(cart.id)} > Edit </button>
                     <button onClick={()=>redirect(cart.id)}> Delete </button>
                    </center>               
                      </div>

                  </div>

              </div>
              )
          })}
        
          </div>
          <div  className="center" style={{paddingBottom:"3%"}}>
          <button onClick={()=>saveOrder(datas)}>Place Order</button>
          </div>
         
  </>
  
  );}
  else{
    console.log(localStorage.getItem('token'));
    return(<Navigate to="/user/login" replace={true} />)
  }
  
}
