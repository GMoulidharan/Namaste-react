import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';





//not using keys(not acceptable) <<<<< index as keys <<<<< unique id(best practice)


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