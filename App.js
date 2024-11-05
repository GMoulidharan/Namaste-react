import React from 'react';
import ReactDOM from 'react-dom/client';


/*
* -Header
    -Logo
    -Nav Items
* -Body
    -Search
    -Restaurant container
        -restaurant card
            -image
            -Name of res,start,cuisine,delivery time
* -Footer
    -copy right
    -links
    -address
    -contact

*/ 

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All'></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    const{resName, cuisine} = props
    

    return(
        <div className='res-card'>
            <img
             className='res-logo'
             alt='res-logo'
             src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/njqtgcdmse85dblw0liq'></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};



const Body = () =>{
    return(<div className='body'>
        <div className='search'>
            Search
        </div>
        <div className='restaurant-container'>
        <RestaurantCard 
            resName="Meghna Foods" 
            cuisine="Briyani, North Indian, Asian"
            
        />
        <RestaurantCard 
            resName="KFC" 
            cuisine="Burger, Fast Food"
        />            
        </div>
    </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const root  = ReactDOM.createRoot(document.getElementById('root'));//displaying on to browser use ReactDOM

root.render(<AppLayout />);