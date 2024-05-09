import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import 'nprogress/nprogress.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/content/DashBoard";
import ManageUser from "./components/Admin/content/ManageUser";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import ListQuiz from "./components/User/ListQuiz";
import QuizDetail from "./components/User/QuizDetail";
import QuizManager from "./components/Admin/content/Quiz/QuizManager";
import QuestionManager from "./components/Admin/content/Question/QuestionManager";
const router = createBrowserRouter([
  //Home
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <ListQuiz />,
      }
    ]
  },
  //Admin
  {
    path: "/admins",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashBoard /> },
      {
        path: "manage-users",
        element: <ManageUser />,
      },
      {
        path: "manage-quizzes",
        element: <QuizManager />,
      },
      {
        path: "manage-questions",
        element: <QuestionManager />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/quiz/:id",
    element: <QuizDetail />,
    errorElement: <ErrorPage />
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </PersistGate >
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
