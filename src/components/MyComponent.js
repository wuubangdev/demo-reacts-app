
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    
    render() {
        const array = ["abc", "cde", "fgh"];
        return (
            <div>
                <UserInfor/>
                <br></br>
                <DisplayInfor name ={"WuuBang"} age={26} array = {array}/>
                <DisplayInfor name ={"Kick"} age={27} array = {array}/>
            </div>
        );
    }
}

export default MyComponent;