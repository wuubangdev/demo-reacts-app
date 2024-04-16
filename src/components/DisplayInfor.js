import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const {listUsers} = this.props;
        return (
            <React.Fragment>
            <div className="display-infor-container">
                <img src = {logo} alt=""/>
                <>
                    <span onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser?"Hide ":"Show "}list user:</span>
                </>
                {this.state.isShowListUser && 
                <>
                {listUsers.map((user)=> {
                        return(
                            <div key={user.id} className={(+user.age>=18)?"green":"red"}>
                                <div>My name is {user.name}</div>
                                <div>I am years old {user.age}</div>
                                <hr/> 
                            </div>
                        )
                    })}
                </>}
            </div>
            </React.Fragment>
        );
    }
}

export default DisplayInfor;