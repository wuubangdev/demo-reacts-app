import React, { useState } from "react";



const AddUser = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('Ca mau');
    
    const  handleInput = (event) => {
        setName(event.target.value);
    }

    const handleAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random()*100+1) + "-random",
            name: name,
            age: age
        })
    }
    return (
        <>
            my name is {name} and i'm {age}
                <form onSubmit={(event)=>handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type ="text"
                value= {name}
                onInput={(e)=>{handleInput(e)}}
                /> 
                <button>submit</button>
            </form>
            <form onSubmit={(event)=>handleOnSubmit(event)}>
                <label>Your age:</label>
                <input type ="text"
                value= {age}
                onInput={(e)=>{handleAge(e)}}
                /> 
                <button>submit</button>
            </form>
        </>
    );
}

export default AddUser;