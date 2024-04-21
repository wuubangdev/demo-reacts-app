

const TableUser = (props) => {

    const { listUsers, handleClickUpdate } = props

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
                                    <button className="btn btn-info" >View</button>
                                    <button
                                        className="btn btn-warning mx-3"
                                        onClick={() => handleClickUpdate(user)}
                                    >
                                        Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {listUsers && listUsers.length === 0 && <tr><td colSpan={"4"}>Not found data (^ . ^!)</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;