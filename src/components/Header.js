import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="flex justify-between items-center bg-orange-100 mb-2 shadow-lg max-h-16">
            <div className="logo-container">
                <img
                    className='w-14 m-2 rounded-full'
                    src={LOGO_URL}></img>
            </div>
            <h2 className="text-3xl font-bold">Cut & Craft</h2>

            <ul className="flex p-4 m-4 text-xl font-semibold items-center">
                <li className="px-2">
                    Online Status:{onlineStatus ? "✅" : "🔴"}
                </li>
                <Link
                    to="/"
                    className="link"
                >
                    <li className="px-2">Home</li>
                </Link>
                <Link
                    to="/about"
                    className="link"
                >
                    <li className="px-2">About</li>
                </Link>
                <Link
                    to="/contact"
                    className="link"
                >
                    <li className="px-2">Contact</li>
                </Link>
                <Link
                    to="/grocery"
                    className="link"
                >
                    <li className="px-2">Grocery</li>
                </Link>
                <li className="px-2">Cart</li>
                <button 
                    onClick={() => {
                    loginBtn === "Login"
                        ? setLoginBtn("Logout")
                        : setLoginBtn("Login");
                }} className="px-3 py-1 rounded-lg bg-red-300">{loginBtn}</button>
                <li className='px-2 font-bold'>{loggedInUser}</li>
            </ul>

        </div>
    );
};

export default Header;