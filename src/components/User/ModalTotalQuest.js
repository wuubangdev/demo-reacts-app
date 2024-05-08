import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalTotalQuest(props) {
    const { show, setShow, totalResult } = props;
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Quiz result: </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Total quest: <b>{totalResult.countTotal}</b>
                    <br />
                    Correct quest: <b>{totalResult.countCorrect}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalTotalQuest;
