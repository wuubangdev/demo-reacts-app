import _ from 'lodash';

const Question = (props) => {
    const { data, currentIndex, handleCheckAnswer } = props;
    if (_.isEmpty(data)) {
        return (<></>);
    }

    return (
        <>
            {data.image &&
                <div className='image'>
                    <img src={"data:image/jpeg;base64," + data.image} alt="" />
                </div>
            }
            <div className="question">
                Question {currentIndex + 1}: {data.description}?
            </div>
            <div className="answer">
                {data.answers && data.answers.length
                    && data.answers.map((answer, index) => {
                        return (
                            <div key={'answer-' + index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={answer.isChecked}
                                    onChange={() => handleCheckAnswer(data.quizId, answer.id)} />
                                <label className="form-check-label" >
                                    {answer.description}
                                </label>
                            </div>
                        )
                    })}
                <div className="answer-detail"></div>
            </div>
        </>
    )
}

export default Question;