
import React, { useState } from "react";
import AddUser from "./AddUser";
import DisplayInfor from "./DisplayInfor";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "WuuBang", age: 16 },
        { id: 2, name: "Paul", age: 26 },
        { id: 3, name: "Kick", age: 27 },
    ]);
    const handleAddNewUser = (user) => {
        setListUsers([user,...listUsers]);
    };
    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUsers]
        listUserClone = listUserClone.filter((iteam)=>{
            return iteam.id !== userId;
        })
        setListUsers(listUserClone);
    };
    return (
        <>
            <AddUser
            handleAddNewUser = {handleAddNewUser}
            />
            <br></br>
            <DisplayInfor 
            handleDeleteUser= {handleDeleteUser}
            listUsers={listUsers}
            />
        </>
    );
}
export default MyComponent;