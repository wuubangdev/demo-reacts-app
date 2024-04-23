import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from 'react-icons/fc';
import { useEffect, useState } from "react";
//import TableUser from "./TableUser";
import { getAllUser, getAllUserPagination } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalUserDetail from "./ModalUserDetail";
import TableUserPagination from "./TableUserPagination";
import ModalDeleteUser from "./ModalDeleteUser";


const ManageUser = (props) => {
    const LIMIT_USER = 6;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalUserDetail, setShowModalUserDetail] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [forcePage, setForcePage] = useState(0);

    useEffect(() => {
        //fetchListUser();
        fetchListUserPagination(1)
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const fetchListUserPagination = async (page) => {
        let res = await getAllUserPagination(page, LIMIT_USER);
        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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
                    <TableUserPagination
                        listUsers={listUsers}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                        fetchListUserPagination={fetchListUserPagination}
                        pageCount={pageCount}
                        forcePage={forcePage}
                        setForcePage={setForcePage}
                    />
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                    /> */}
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                    fetchListUserPagination={fetchListUserPagination}
                    setForcePage={setForcePage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    setDataUpdate={setDataUpdate}
                    fetchListUserPagination={fetchListUserPagination}
                    forcePage={forcePage}
                />
                <ModalUserDetail
                    show={showModalUserDetail}
                    setShow={setShowModalUserDetail}
                    dataView={dataView}
                    setDataView={setDataView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUser={fetchListUser}
                    fetchListUserPagination={fetchListUserPagination}
                    setForcePage={setForcePage}
                />
            </div>
        </div>
    )
}
export default ManageUser;