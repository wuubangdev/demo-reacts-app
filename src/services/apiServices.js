import axios from "../utils/axiosCustom";

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}
const getAllUser = () => {
    return axios.get('api/v1/participant/all');
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data);
}
//`
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}
const getAllUserPagination = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}
const userLogin = (email, password) => {
    const delay = 5000;
    return axios.post('api/v1/login', { email, password, delay });
}
const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant');
}
const getQuizData = (id) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${id}`)
}
const postSubmitQuiz = (data) => {
    return axios.post(`api/v1/quiz-submit`, { ...data })
}
const postSubmitCreateQuiz = (description, name, type, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', type);
    data.append('quizImage', image);
    return axios.post('api/v1/quiz', data);
}
const getAllQuizAdmin = () => {
    return axios.get('/api/v1/quiz/all');
}
const deleteQuiz = (userId) => {
    return axios.delete(`/api/v1/quiz/${userId}`);
}
const getQuizById = (userId) => {
    return axios.get(`/api/v1/quiz/${userId}`);
}
export {
    postCreateNewUser,
    getAllUser,
    putUpdateUser,
    deleteUser,
    getAllUserPagination,
    userLogin,
    getQuizByUser,
    getQuizData,
    postSubmitQuiz,
    postSubmitCreateQuiz,
    getAllQuizAdmin,
    deleteQuiz,
    getQuizById,
};