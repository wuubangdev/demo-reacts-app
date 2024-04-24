import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {


    return (
        <>
            <Outlet />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;