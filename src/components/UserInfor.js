import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Bang",
        age: 27,
        address: "Ca Mau"
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
        console.log(this.state);
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

export default UserInfor;