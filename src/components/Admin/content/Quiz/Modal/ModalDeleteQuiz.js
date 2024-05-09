import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteQuiz } from '../../../../../services/apiServices';
import { toast } from 'react-toastify';

function ModalDeleteQuiz(props) {
    const { show, setShow, idDelete, fetchAllQuiz } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await deleteQuiz(idDelete);
        if (data && data.EC === 0) {
            handleClose();
            toast.success(data.EM);
            fetchAllQuiz();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }

    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the user </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete quiz with id = {idDelete ? idDelete : ""}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;
