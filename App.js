import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX - is not HTML inside JS. Its HTML like or XML like syntax.

//JSX (transpiled b4 it reaches the JS engine ) -> Parcel ->

//JSX =>Bable transplie it to React.createElement => ReactElement - JS Object => HTMLElement(render).

//React Element
/*
const heading = (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX in React element
    </h1>
);
*/


const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using functional component
    </h1>
);


const elem = <span>React Element</span>
const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
);

//React Functional Components

// const HeadingComponent = () =>{
//     return <h1 className="heading">Namaste React Functional Component</h1>
// }

//component composition

const number = 1000;
const HeadingComponent2 = () => (
    <div id="container">    
    {/* react element inside component */}    
        {title}
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);



const root  = ReactDOM.createRoot(document.getElementById('root'));//displaying on to browser use ReactDOM

root.render(<HeadingComponent2 />);