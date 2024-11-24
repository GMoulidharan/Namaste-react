import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy name",
                location:"Default",
            }
        }
        // console.log(this.props.name+" child constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name +" child componentDidMount");
        //API call

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({ //Updating the state
            userInfo:json,
        })
        // console.log(json);
    }

    componentDidUpdate(){
        // console.log("CDUpdate");
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount");
    }
    render() {
        
        // console.log(this.props.name+" child render");
        const{name, location,avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}>
                
                </img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <p>Contact: moulidharansrv@gmail.com</p>
            </div>
        );
    }
}

export default UserClass;

/*
----MOUNTING----

-Constructor called(dummy data)
-Render Called(dummy data)
    <HTML Dummy/>
-Component Did Mount called 
    <API call>
    <this.setState> is called  
        --> state variable is updated

----UPDATE----

    render(API data)
    <HTML (new API data)>

-Component Did Update

*/