import { FcPlus } from 'react-icons/fc';
import './QuizManager.scss';
import { useState } from 'react';
import Select from 'react-select';
import { postSubmitCreateQuiz } from '../../../../services/apiServices';
import { toast } from 'react-toastify';
import QuizDetailTable from './QuizDetailTable';
import Accordion from 'react-bootstrap/Accordion';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' }
]

const QuizManager = (props) => {
    const [previewImage, setPreviewImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);

    const handleUploadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    }
    const handleSubmitCreateQuiz = async () => {
        if (!name || !description) {
            toast.error('Name or description is invalid!!')
            return;
        }
        let res = await postSubmitCreateQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }
    return (
        <div className='quiz-container'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Quiz manager</b></Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add new quiz:</legend>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder=""
                                    />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder=""
                                    />
                                    <label >Description</label>
                                </div>
                                <div className="col-md-3 mt-3">
                                    <Select
                                        options={options}
                                        placeholder='Quiz type ...'
                                        defaultValue={type}
                                        onChange={setType}
                                    />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label className="form-label label-upload" htmlFor='inputImage'><FcPlus />Upload file image</label>
                                    <input
                                        type="file"
                                        id='inputImage'
                                        onChange={e => handleUploadImage(e)}
                                        hidden />
                                </div>
                                <div className="col-md-12 img-preview">
                                    {previewImage ?
                                        <img src={previewImage} alt='' />
                                        : <span>Preview Image</span>
                                    }

                                </div>
                                <div className="col-md-12 mt-3 d-flex justify-content-center">
                                    <button className='btn btn-warning' onClick={() => handleSubmitCreateQuiz()}>Save new quiz</button>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <div className="list-detail">
                <QuizDetailTable

                />
            </div>
        </div>
    )
}

export default QuizManager;