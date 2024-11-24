import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent constructor ");
    }

    componentDidMount(){
        // console.log("parent componentDidMount");
    }
    render() {
        // console.log("Parent render");
        return(
            <div>
                <h1>About class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) =><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>Hello world</h2>
                <UserClass name={"First"} location={"Rasipuram"}/>
                
            </div>
        );
    };
}


export default About;

