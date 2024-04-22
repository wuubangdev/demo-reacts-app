import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from 'react-icons/fc';
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalUserDetail from "./ModalUserDetail";
import ModalDeteleUser from "./ModalDeteleUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalUserDetail, setShowModalUserDetail] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUser();
    }, []);
    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const handleClickUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);

    }
    const handleClickView = (dataView) => {
        setShowModalUserDetail(true);
        setDataView(dataView);
    }
    const handleClickDelete = (dataDelete) => {
        setShowModalDeleteUser(true);
        setDataDelete(dataDelete)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    setDataUpdate={setDataUpdate}
                />
                <ModalUserDetail
                    show={showModalUserDetail}
                    setShow={setShowModalUserDetail}
                    dataView={dataView}
                    setDataView={setDataView}
                />
                <ModalDeteleUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                />
            </div>
        </div>
    )
}
export default ManageUser;