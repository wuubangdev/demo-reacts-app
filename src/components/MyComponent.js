
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "WuuBang", age: 16 },
            { id: 2, name: "Paul", age: 26 },
            { id: 3, name: "Kick", age: 27 },
        ]
    }
    render() {
        return (
            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent;