import {LOGO_URL} from '../utils/constants';
import { useState, useEffect } from 'react';

const Header = () =>{

    // let btnName = "login";

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("header render");
    //If no dependency array  ==> useEffect is called on every render.
    //If dependency array is empty = [] ==> useEffect is called on initial render(just once).
    //If dependency array is [btnNameReact] ==> useEffect is called every time  btnNameReact is updated
    useEffect(() =>{
        console.log("useEffect called in header");
    },[btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                       btnNameReact === "Login" 
                       ?setBtnNameReact("Logout")
                       : setBtnNameReact("Login");
                    }} className="login-btn">{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;