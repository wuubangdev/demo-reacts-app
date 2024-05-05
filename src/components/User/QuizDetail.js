import { useEffect, useState } from 'react';
import { getQuizData, postSubmitQuiz } from '../../services/apiServices';
import { useLocation, useParams } from 'react-router-dom';
import _ from 'lodash';
import './QuizDetail.scss';
import Question from './Question';
const QuizDetail = () => {
    const [quizContent, setQuizContent] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const params = useParams();
    const quizId = params.id;
    useEffect(() => {
        fetchQuestions();
    }, [quizId]);
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
                        value.answers.isChecked = false;
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
            setQuizContent(data);
        }
    }
    const handleClickPrev = () => {
        if (currentIndex - 1 < 0) return;
        setCurrentIndex(currentIndex - 1);
    }
    const handleClickNext = () => {
        if (quizContent && currentIndex + 1 === quizContent.length) return;
        setCurrentIndex(currentIndex + 1);
    }

    const handleCheckAnswer = (qId, aId) => {
        let quizContentClone = _.cloneDeep(quizContent);
        let quest = quizContentClone.find(item => (+item.quizId === +qId));
        if (quest && quest.answers) {
            let b = quest.answers.map(item => {
                if (+item.id === +aId) {
                    item.isChecked = !item.isChecked;
                }
                return item;
            })
            quest.answers = b;
        }
        let index = quizContentClone.findIndex(item => (+item.quizId === +qId));
        if (index > -1) {
            quizContentClone[index] = quest;
            setQuizContent(quizContentClone);
        }
    }
    const handleSubmitQuiz = async () => {
        let payload = {
            quizId: +quizId,
            answers: []
        }
        let answers = [];
        if (quizContent && quizContent.length > 0) {
            quizContent.forEach(question => {
                let questionId = +question.quizId;
                let userAnswerId = [];
                question.answers.forEach(a => {
                    if (a.isChecked) {
                        userAnswerId.push(+a.id)
                    }
                })
                answers.push({ questionId, userAnswerId })
            })
        }
        payload.answers = answers;
        let res = await postSubmitQuiz(payload);
        if (res.DT && res.EC === 0) {

        }
    }
    return (
        <div className='container detail-quiz-container'>
            <div className='left-content'>
                <div className='title'>
                    Quiz-{quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className='q-content'>
                    <Question
                        data={
                            quizContent && quizContent.length > 0
                                ?
                                quizContent[currentIndex]
                                :
                                []
                        }
                        currentIndex={currentIndex}
                        handleCheckAnswer={handleCheckAnswer}
                    />
                </div>
                <div className='q-footer'>
                    <button
                        className='btn btn-primary'
                        onClick={() => handleClickPrev()}
                    >Prev
                    </button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => handleClickNext()}
                    >Next
                    </button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => handleSubmitQuiz()}
                    >Finish
                    </button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default QuizDetail;