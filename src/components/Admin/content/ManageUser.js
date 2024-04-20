import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUse, setShowModalCreateUse] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUse(true)}
                    >
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    Table users
                </div>
                <ModalCreateUser
                    show={showModalCreateUse}
                    setShow={setShowModalCreateUse}
                />
            </div>
        </div>
    )
}
export default ManageUser;