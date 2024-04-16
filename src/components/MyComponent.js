
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
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUsers]
        listUserClone = listUserClone.filter((iteam)=>{
            return iteam.id !== userId;
        })
        this.setState({
            listUsers: listUserClone
        })
    }
    render() {
        return (
            <>
                <AddUser
                handleAddNewUser = {this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                handleDeleteUser= {this.handleDeleteUser}
                listUsers={this.state.listUsers}
                />
            </>
        );
    }
}

export default MyComponent;