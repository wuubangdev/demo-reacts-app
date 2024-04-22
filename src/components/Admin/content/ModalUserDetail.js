import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ModalUserDetail = (props) => {
    const { show, setShow, dataView, setDataView } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setUserName("");
        setRole("USER");
        setPreviewImage("");
        setDataView({});
    }

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [previewImage, setPreviewImage] = useState(false);

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email);
            setUserName(dataView.username);
            setRole(dataView.role);
            if (dataView.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
            }
        }
    }, [dataView])
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>User Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                        <Card style={{ width: '18rem' }}>
                            {previewImage ?
                                <Card.Img variant="top" src={previewImage} />
                                :
                                <div className="col-md-12 img-preview">
                                    <span>No preview Image</span>
                                </div>
                            }
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                                    <ListGroup.Item>Username: {username}</ListGroup.Item>
                                    <ListGroup.Item>Role: {role}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
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

export default ModalUserDetail;