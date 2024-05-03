import { useEffect, useState } from 'react';
import { getQuizData } from '../../services/apiServices';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

const QuizDetail = () => {
    const [detailQuiz, setDetailQuiz] = useState([])
    let { id } = useParams();
    useEffect(() => {
        fetchQuestions();
    }, [id])

    const fetchQuestions = async () => {
        let res = await getQuizData(id);
        if (res && res.EC === 0) {
            let raw = res.DT;
            console.log(raw)
            let temp = _.chain(raw)
                .groupBy("id")
                .map((iteam) => {
                    let description = '';
                    let image = '';
                    let answers = [];
                    iteam.forEach((value, index) => {
                        if (index === 0) {
                            description = value.description;
                            image = value.image;
                        }
                        answers.push(value.answers);
                    })
                    return {
                        quizId: iteam.id,
                        answers,
                        image,
                        description
                    }
                })
                .value()

            console.log(temp)

        }
    }

    return (
        <div className='container'>
            Quiz Details
        </div>
    )
}

export default QuizDetail;