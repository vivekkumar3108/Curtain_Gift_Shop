import React, { useState , useEffect} from "react";
import {Link, useNavigate, Routes, Route, Navigate, BrowserRoute, useLocation} from 'react-router-dom';

function EditCart(){
    const queryParams = new URLSearchParams(window.location.search);
    const idx = queryParams.get('id');
    console.log(idx);
    
    function logout(){
        localStorage.removeItem('to');
      };
    //console.log(`http://localhost:8080/user/selectGift?id=${id}`);
  
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(localStorage.getItem('to'));

    const location = useLocation();
    var f = location.state.id;
    var id = f;

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
      const[orderdesc,setDesc]=useState('');
      const[ordername,setOrderName]=useState('');
      const[theme,setThemename]=useState(themes);
      const [themename, setSelectedItem] = useState(null);
  
      const handleItemClick = (name) => {
        themename == name ? setSelectedItem(null) : setSelectedItem(name);
      }
  
      const handleClick=(e)=>{
          e.preventDefault();
          const cart={id,ordername,orderdesc,orderdate,orderaddress,orderphone,orderemail,themename}
          console.log(cart);
          fetch("http://localhost:8080/user/EditCart",
          {
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(cart),
          }).then(()=>{alert("Cart Updated")})
          }
  
  
  if(user!=null){
  return ( <>
  
  <div className="topnav">
  <a className="pad" id="">Curtain Gifts</a> 
          <a id="productHomeButton"> <Link to = "/home" className="link"> Home  </Link> </a>
          <a id="productOrderButton"> < Link to = "/user/orders" className="link"> Orders </Link> </a>
          <a className="padr"> < Link to="/admin/login" className="link"><button onClick={() => logout()}>Logout</button></Link></a>
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
      </>)}
      else{
        return(<Navigate to="/admin/login" replace={true} />)
      }
}

export default EditCart;