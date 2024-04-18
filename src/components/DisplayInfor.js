import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';

const DisplayInfor = (props) => {

    const [isShowListUser, SetIsShowListUser] = useState(true);

    const handleShowHide = () => {
        SetIsShowListUser(!isShowListUser)
    }
    return (
        <>
            <div className="display-infor-container">
                <div>
                    <span onClick={()=>{handleShowHide()}}>{isShowListUser?"Hide ":"Show "}list user:</span>
                </div>
                {isShowListUser && <div>
                {props.listUsers.map((user)=> {
                        return(
                            <div key={user.id} className={(+user.age>=18)?"green":"red"}>
                                <div>My name is {user.name}</div>
                                <div>I am years old {user.age}</div>
                                <button onClick={()=>{props.handleDeleteUser(user.id)}}>Delete</button>
                                <hr/> 
                            </div>
                        )
                    })}
                </div>}
            </div>
         </>
    )
}
export default DisplayInfor;