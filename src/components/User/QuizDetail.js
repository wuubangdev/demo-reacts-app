import { useEffect, useState } from 'react';
import { getQuizData } from '../../services/apiServices';
import { useLocation, useParams } from 'react-router-dom';
import _ from 'lodash';
import './QuizDetail.scss';
const QuizDetail = () => {
    const [detailQuiz, setDetailQuiz] = useState([])
    const params = useParams()
    const quizId = params.id;
    useEffect(() => {
        fetchQuestions();
    }, [quizId])
    const location = useLocation();
    const fetchQuestions = async () => {
        let res = await getQuizData(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((item) => {
                    let answers = [];
                    let description = null;
                    let image = null;
                    let quizId = null;
                    item.forEach((value, index) => {
                        if (index === 0) {
                            quizId = value.id;
                            description = value.description;
                            image = value.image;
                        }
                        answers.push(value.answers);
                    })
                    return {
                        quizId,
                        answers,
                        image,
                        description
                    }
                })
                .value()
            console.log(data)
        }
    }

    return (
        <div className='container detail-quiz-container'>
            <div className='left-content'>
                <div className='title'>
                    Quiz-{quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className='q-body'>
                    <img src="" alt="" />
                </div>
                <div className='q-content'>
                    <div className="question">
                        Question 1:  How are you doing?
                    </div>
                    <div className="answer">
                        <div className="answer-detail">A. asdas</div>
                        <div className="answer-detail">B. qwdsadas</div>
                        <div className="answer-detail">C. asdasdas</div>
                    </div>
                </div>
                <div className='q-footer'>
                    <button className='btn btn-primary'>Prev</button>
                    <button className='btn btn-secondary'>Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default QuizDetail;