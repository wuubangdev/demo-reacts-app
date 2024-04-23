import ReactPaginate from "react-paginate";



const TableUserPagination = (props) => {

    const {
        listUsers,
        handleClickUpdate,
        handleClickView,
        handleClickDelete,
        fetchListUserPagination,
        pageCount,
        forcePage,
        setForcePage
    } = props;

    const handlePageClick = (event) => {
        fetchListUserPagination(+event.selected + 1);
        setForcePage(+event.selected + 1);
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                        return (
                            <tr key={"table-user-" + index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-info"
                                        onClick={() => handleClickView(user)} >View</button>
                                    <button
                                        className="btn btn-warning mx-3"
                                        onClick={() => handleClickUpdate(user)}
                                    >
                                        Update</button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleClickDelete(user)}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUsers && listUsers.length === 0 && <tr><td colSpan={"4"}>Not found data (^ . ^!)</td></tr>}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={forcePage - 1}
                />
            </div>
        </>
    )
}

export default TableUserPagination;
