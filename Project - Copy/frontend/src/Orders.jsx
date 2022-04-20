import react from "react";
import React, { useState , useEffect} from "react";
import {Link,Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import './Design.css';

function Orders(){
    const [user,setUser] = useState(localStorage.getItem('to'));
    const [orders,setOrder] = useState([]);
    function logout(){
        localStorage.removeItem('to');
      };
      
      useEffect(()=>{
        fetch("http://localhost:8080/admin/orders")
        .then(res=>res.json())
        .then((result)=>{
          setOrder(result);
        }
      )
      })
      const redirect = (id) => {
        fetch(`http://localhost:8080/admin/deleteOrder?id=${id}`,
        {
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        }).then(()=>{alert("Order Deleted")})
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
        <div style={{ width:"65%",marginLeft:"20%"}}>
        <br/><br/><br/>
        <div className="ScrollStyle1">
            <div >
            {orders.map(order => {
            return(
                <div> 
                    < div className="box1" id = {order.id}> 
                    Gift Name : {order.giftname} 
                    <br/>
                    Order Name : {order.ordername}
                    <br/>
                    Order Price : {order.orderprice}
                    <br/>
                    Theme Name : {order.themename}
                    <br/>
                    User Name : {order.username}
                    <br/>
                    Phone : {order.orderphone}
                    <br/>
                    Email : {order.orderemail}
                    <br/>
                    Date : {order.orderdate}
                    <br/>
                    Address : {order.orderaddress}
                    <br/>
                    <t/>
                    < button onClick={()=>redirect(order.id)}  style={{ marginLeft:"80%"}}>Delete</button>
                    </div>
                <br/>
                
                </div>

            )
        })}
            </div>
        </div>

    </div>
        
            </>
        }
        else{
            return(<Navigate to="/admin/login" replace={true} />)
        }
      }

export default Orders;