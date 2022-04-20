import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Admingifts from "./Admingifts";
import EditGifts from "./EditGifts";
import AddTheme from "./AdminTheme";
import EditTheme from "./EditTheme";
import Orders from "./Orders";
import AdminLogin from "./AdminLogin";
import Homepage from "./Homepage";
import Cart from "./Cart";
import UserOrders from "./UserOrders";
import EditCart from "./EditCart";
export default function App(){

    return(
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/user/login" element={<Login/>}></Route>      
        <Route path = "/admin/addGift" element={<Admingifts/>}> </Route> 
        <Route path = "/admin/updateGift" element={<EditGifts/>}> </Route> 
        <Route path = "/admin/addTheme" element={<AddTheme/>}> </Route> 
        <Route path = "/admin/updateTheme" element={<EditTheme/>}> </Route> 
        <Route path = "/admin/orders" element={<Orders/>}> </Route>
        <Route path = "/user/orders" element={<UserOrders/>}> </Route>
        <Route path = "/admin/login" element={<AdminLogin/>}> </Route>
        <Route path = "/home" element={<Homepage/>}> </Route>
        <Route path = "/user/cart" element={<Cart/>}> </Route>
        <Route path = "/user/EditCart" element={<EditCart/>}> </Route>
    </Routes>
    </BrowserRouter>
    </div>)
}