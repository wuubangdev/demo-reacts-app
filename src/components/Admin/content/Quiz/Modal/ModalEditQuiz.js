import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { putEditQuiz } from '../../../../../services/apiServices';
import _ from 'lodash';

const ModalEditQuiz = (props) => {
    const { show, setShow, dataUpdate, setDataUpdate, fetchAllQuiz } = props;
    const handleClose = () => {
        setShow(false);
        setName("");
        setDescription("");
        setType("EASY");
        setImage('');
        setPreviewImage("");
        setDataUpdate({});
    }

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("EASY");
    const [previewImage, setPreviewImage] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setName(dataUpdate.name);
            setDescription(dataUpdate.description);
            setType(dataUpdate.difficulty);
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [dataUpdate])

    const handleUploadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    }
    const handleSubmitForm = async () => {
        let data = await putEditQuiz(dataUpdate.id, name, description, type, image);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            fetchAllQuiz();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }

    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Id:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataUpdate.id}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                disabled
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                value={type}
                                onChange={(e) => { setType(e.target.value) }}
                            >
                                <option value={'EASY'}>EASY</option>
                                <option value={'MEDIUM'}>MEDIUM</option>
                                <option value={'HARD'}>HARD</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor='inputImageUp'><FcPlus />Upload file image</label>
                            <input
                                type="file"
                                id='inputImageUp'
                                onChange={e => handleUploadImage(e)}
                                hidden />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img src={previewImage} />
                                : <span>Preview Image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitForm()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditQuiz;