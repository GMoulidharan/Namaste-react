import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//not using keys(not acceptable) <<<<< index as keys <<<<< unique id(best practice)


const AppLayout = () =>{
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />,
        errorElement:<Error />
    }, 
    {
        path:"/contact",
        element:<Contact />,
        errorElement:<Error />
    },
]);

const root  = ReactDOM.createRoot(document.getElementById('root'));//displaying on to browser use ReactDOM

root.render(<RouterProvider router={appRouter}/>);