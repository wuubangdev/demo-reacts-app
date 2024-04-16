
import React from "react";
import AddUser from "./AddUser";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "WuuBang", age: 16 },
            { id: 2, name: "Paul", age: 26 },
            { id: 3, name: "Kick", age: 27 },
        ]
    }
    handleAddNewUser = (user) => {
        this.setState({
            listUsers: [user,...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <AddUser
                handleAddNewUser = {this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;