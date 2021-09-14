import React, { Component } from "react";

class DataComponent extends Component{
    
    constructor(props){
        super(props);

        this.state = {age: this.props.age};
        const addAge = (e) =>{
            console.log("in add age function")
            this.setState({age: this.props.age + 1})
        }
    }
    
    
    
    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={e=>this.setState({age: this.state.age + 1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default DataComponent;