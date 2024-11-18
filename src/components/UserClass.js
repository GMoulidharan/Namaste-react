import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:2,
        }
        console.log(this.props.name+" child constructor");
    }
    componentDidMount(){
        console.log(this.props.name +" child componentDidMount");
        //API call
    }

    render() {
        const{name,location} = this.props;
        const {count} = this.state;
        console.log(this.props.name+" child render");
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button
                    onClick={() =>{
                        //never update state variables directly
                        this.setState({
                            count: this.state.count +1, 
                            
                        })
                    }}
                >Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <p>Contact: moulidharansrv@gmail.com</p>
            </div>
        );
    }
}

export default UserClass;