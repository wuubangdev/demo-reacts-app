import { useState } from "react";
import { getQuizById } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import ModalDeleteQuiz from "./Modal/ModalDeleteQuiz";
import ModalShowQuiz from "./Modal/ModalShowQuiz";
import ModalEditQuiz from './Modal/ModalEditQuiz';

const QuizDetailTable = (props) => {

    const { listQuiz, fetchAllQuiz } = props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);

    const [showShowQuizModal, setShowShowQuizModal] = useState(false);
    const [dataView, setDataView] = useState({})

    const [showShowEditModal, setShowShowEditModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({})

    const handleClickDelete = (id) => {
        setShowDeleteModal(true);
        setIdDelete(id);
        fetchAllQuiz();
    }
    const handleClickShow = async (id) => {
        setShowShowQuizModal(true);
        let res = await getQuizById(id);
        if (res && res.EC === 0) {
            setDataView(res?.DT);
            toast.success(res.EM);
        } else {
            toast.error(res.EM);
        }
    }
    const handleClickEdit = async (id) => {
        setShowShowEditModal(true);
        let res = await getQuizById(id);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setDataUpdate(res?.DT);
        } else {
            toast.error(res.EM);
        }
    }
    return (
        <>
            <div className="table-title my-2">
                Quizzes table:
            </div>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        listQuiz && listQuiz.map((item, index) => {
                            return (
                                <tr key={`quiz-item-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td style={{ display: "flex", gap: "15px" }}>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleClickEdit(item.id)}
                                        >Edit</button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleClickShow(item.id)}
                                        >Show</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleClickDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
                <ModalDeleteQuiz
                    show={showDeleteModal}
                    setShow={setShowDeleteModal}
                    idDelete={idDelete}
                    fetchAllQuiz={fetchAllQuiz}
                />
                <ModalShowQuiz
                    show={showShowQuizModal}
                    setShow={setShowShowQuizModal}
                    dataView={dataView}
                    setDataView={setDataView}
                />
                <ModalEditQuiz
                    show={showShowEditModal}
                    setShow={setShowShowEditModal}
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    fetchAllQuiz={fetchAllQuiz}
                />
            </table>
        </>

    )
}

export default QuizDetailTable;