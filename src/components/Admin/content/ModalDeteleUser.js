import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiServices';

function ModalDeteleUser(props) {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id);
        alert(data);
        // if (data && data.EC === 0) {
        //     handleClose();
        // toast.success(data.EM);
        // await fetchListUser();
        // }
        // if (data && data.EC !== 0) {
        //     toast.error(data.EM);
        // }

    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the user </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user.
                    <br />
                    <b>Email: {dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
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

export default ModalDeteleUser;
