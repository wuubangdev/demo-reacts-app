import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';

const DisplayInfor = (props) => {
    const {listUsers} = props;
    const [isShowListUser, SetIsShowListUser] = useState(true);

    const handleShowHide = () => {
        SetIsShowListUser(!isShowListUser)
    }
    useEffect(()=>{
        console.log('>>>Check effect')
        if(listUsers.length ===0) {
            alert("mew")
        }
    },[listUsers])
    console.log(">>>>check render")
    return (
        <>
            <div className="display-infor-container">
                <div>
                    <span onClick={()=>{handleShowHide()}}>{isShowListUser?"Hide ":"Show "}list user:</span>
                </div>
                {isShowListUser && <div>
                {listUsers.map((user)=> {
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