import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <h2>Cut & Craft</h2>
            <ul>
                <Link
                    to="/"
                    className="link"
                >
                    <li>Home</li>
                </Link>
                <Link
                    to="/about"
                    className="link"
                >
                    <li>About</li>
                </Link>
                <Link
                    to="/contact"
                    className="link"
                >
                    <li>Contact</li>
                </Link>
                <li>Cart</li>
                <button onClick={() => {
                    loginBtn === "Login"
                        ? setLoginBtn("Logout")
                        : setLoginBtn("Login");
                }} className="login-btn">{loginBtn}</button>
            </ul>

        </div>
    );
};

export default Header;