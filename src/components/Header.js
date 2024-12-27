import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
  //  console.log(cartItems);


  return (
    <div className="flex flex-wrap items-center justify-between w-full bg-orange-100 mb-2 shadow-lg p-4">
        {/* Logo Section */}
        <div className="logo-container flex items-center">
            <img
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                src={LOGO_URL}
                alt="Logo"
            />
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold ml-3">
                Savory Symphony
            </h2>
        </div>

        {/* Navigation Menu */}
        <ul className="flex flex-wrap items-center justify-center text-base sm:text-lg md:text-xl font-semibold">
            {/* Online Status */}
            <li className="px-2 hidden md:block">
                Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>

            {/* Navigation Links */}
            <Link to="/" className="link px-3">
                <li>Home</li>
            </Link>
            <Link to="/about" className="link px-3 hidden sm:block">
                <li>About</li>
            </Link>
            <Link to="/contact" className="link px-3 hidden sm:block">
                <li>Contact</li>
            </Link>
            <Link to="/grocery" className="link px-3 hidden sm:block">
                <li>Grocery</li>
            </Link>
            <Link to="/cart" className="link px-3">
                <li className="font-bold">Cart ({cartItems.length})</li>
            </Link>

            {/* Login/Logout Button */}
            <button
                onClick={() =>
                    setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"))
                }
                className="px-3 py-1 ml-2 bg-red-300 rounded-lg hover:bg-red-400 transition-all"
            >
                {loginBtn}
            </button>
        </ul>
    </div>
);
};

export default Header;