import React, { useState, useEffect, useRef} from "react";
import {Link} from 'react-router-dom';

import './Design.css';
function Cart(){

  const queryParams = new URLSearchParams(window.location.search);
  const idx = queryParams.get('id');
  console.log(idx);
  //console.log(`http://localhost:8080/user/selectGift?id=${id}`);

  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {getData()},[]);
  console.log(data.giftName);
  const getData= ()=>{
    fetch(`http://localhost:8080/user/selectGift?id=${idx}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      })
      .then(function(response){
        console.log(response)
        return response.json();
      }).then(function(myJson) {
        console.log(myJson);
        setData(myJson);
        setLoading(false);
      }) .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
 

  const [themes,setThem]=useState([]);
  useEffect(()=>{getThem()
    },[]);

    const getThem= ()=>{
      fetch("http://localhost:8080/admin/viewTheme",{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        })
        .then(function(response){
          console.log(response)
          return response.json();
        }).then(function(myJson) {
          console.log(myJson);
          setThem(myJson);
          setLoading(false);
        }) .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

   var lcs =localStorage.getItem('to');
   console.log(lcs);

    const username = lcs;
    const[orderdate,setOrderDate]=useState('');
    const[orderaddress,setAddress]=useState('');
    const[orderphone,setPhone]=useState('');
    const[orderemail,setEmail]=useState('');
    const orderprice = data.giftPrice;
    const[orderdesc,setDesc]=useState('');
    const giftname = data.giftName;
    const[ordername,setOrderName]=useState('');
    const[theme,setThemename]=useState(themes);
    const [themename, setSelectedItem] = useState(null);

    const handleItemClick = (name) => {
      themename == name ? setSelectedItem(null) : setSelectedItem(name);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        const cart={ordername,orderdesc,giftname,orderdate,orderprice,orderaddress,orderphone,orderemail,username,themename}
        console.log(cart);
        fetch("http://localhost:8080/user/addCart",
        {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(cart),
        }).then(()=>{alert("Added to Cart")})
        }



return ( <>

<div className="topnav">
<a className="pad" id="">Curtain Gifts</a> 
        <a id="productHomeButton"> <Link to = "/home" className="link"> Home  </Link> </a>
        <a id="productOrderButton"> < Link to = "/user/orders" className="link"> Orders </Link> </a>
<a className="padr"> < Link to = "/login" className="link">Logout</Link></a>
</div> 

<div className="cart">
<div className="cartData">
            <br></br><br/>
            <form >
            <input placeholder = "Enter Your Name" type = "text" id = "enterUserName" name="enterUserName" value={ordername} onChange={(e)=>setOrderName(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Order Date" type = "Date" id =  "enterOrderDate" name = "enterOrderDate" value={orderdate} onChange={(e)=>setOrderDate(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Your Address" type = "text" id =  "enterUserAddress" name = "enterUserAddress" value={orderaddress} onChange={(e)=>setAddress(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Your Phone Number" type = "text" id =  "enterUserPhone" name =  "enterUserPhone" value={orderphone} onChange={(e)=>setPhone(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Your Email" type = "text" id =  "enterUserEmail" name = "enterUserEmail" value={orderemail} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <input placeholder = "Enter Order Details" type = "text" id =  "enterOrderDetails" name = "enterOrderDetails" value={orderdesc} onChange={(e)=>setDesc(e.target.value)}></input>
            <br></br>
            </form>
</div>
<br></br><br></br>
<div className="giftDet">
    <p className="desc">{data.giftName}</p>
    <p className="desc">{data.giftDesc}</p>
    <p className="desc">{data.giftPrice}</p>

    <select id="themename" >
    {themes.map(theme => {
            return(
                    <option  onClick={e => handleItemClick(e.target.value)} id={theme.id} value={theme.themeName}> {theme.themeName}</option> 
            )
        })}
                </select>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div className="center">
            <button  id = "submitButton" type='submit' value="Submit" onClick={handleClick}> Place Order </button>
            <br></br>
</div>

</div>
    </>)
}

export default Cart;