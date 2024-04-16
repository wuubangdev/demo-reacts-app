import React from "react";

class AddUser extends React.Component {
    state = {
        name: '',
        age: '',
        address: ''
    };
    handleInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random()*100+1) + "-random",
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <div>
                my name is {this.state.name} and i'm {this.state.age}
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type ="text"
                    value= {this.state.name}
                    onInput={(e)=>{this.handleInput(e)}}
                    /> 
                    <button>submit</button>
                </form>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <label>Your age:</label>
                    <input type ="text"
                    value= {this.state.age}
                    onInput={(e)=>{this.handleAge(e)}}
                    /> 
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;