import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor ");
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render() {
        console.log("Parent render");
        return(
            <div>
                <h1>About class Component</h1>
                <h2>Hello world</h2>
                <UserClass name={"First"} location={"Rasipuram"}/>
                <UserClass name={"Second"} location={"US"}/>
                <UserClass name={"Third"} location={"UK"}/>
            </div>
        );
    };
}


/*
const About =() =>{
    return(
        <div>
            <h1>About</h1>
            <h2>Hello world</h2>
            <UserClass name={"Mouli"} location={"Rasipuram"}/>
        </div>
    );
};
*/
export default About;

/*
-Parent constructor
-Parent render
    -First Constructor
    -First Render

    -Second Constructor
    -Second Render

    <DOM UPDATED -IN SINGLE BATCH>

    -First CDM
    -Second CDM

-Parent CDM
*/