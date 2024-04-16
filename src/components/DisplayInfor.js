import React from "react";
import './DisplayInfo.scss'
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
            <div className="display-infor-container">
                <div>
                    <span onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser?"Hide ":"Show "}list user:</span>
                </div>
                {this.state.isShowListUser && 
                <div>
                {listUsers.map((user)=> {
                        return(
                            <div key={user.id} className={(+user.age>=18)?"green":"red"}>
                                <div>My name is {user.name}</div>
                                <div>I am years old {user.age}</div>
                                <hr/> 
                            </div>
                        )
                    })}
                </div>}
            </div>
        );
    }
}

export default DisplayInfor;