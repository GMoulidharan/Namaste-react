import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';

const Header = () =>{

    // let btnName = "login";

    const [btnNameReact, setBtnNameReact] = useState("Login");
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