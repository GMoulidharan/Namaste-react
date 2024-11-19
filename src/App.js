import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
// import Grocery from './components/Grocery';

//Chuncking
//Code Splitting
//Dynamic Bundling
//Lazy loading
//on demand loading
//Dynamic import

const Grocery = lazy(() =>import('./components/Grocery'));

const AppLayout = () =>{
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            }, 
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
]);

const root  = ReactDOM.createRoot(document.getElementById('root'));//displaying on to browser use ReactDOM

root.render(<RouterProvider router={appRouter}/>);