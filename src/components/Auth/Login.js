import './Login.scss';
import logo from '../../assets/logo192.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitLogin = async () => {
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email");
            return;
        }
        if (!password) {
            toast.error("Invalid password");
            return;
        }

        console.log(email, password)
        let data = await userLogin(email, password);
        console.log(data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <div className='container'>
            <div className='login-header'>
                <div>Don't have an account yet?</div>
                <button className='btn'>Sign up</button>
            </div>
            <div className='login-title col-4 mx-auto'>
                <img src={logo} alt="" />
                <p>Hello, who’s this?</p>
            </div>
            <div className='login-form col-4 mx-auto'>
                <div className='mb-3'>
                    <label htmlFor="form-label">Email:</label>
                    <input
                        type="email"
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="form-label">Password:</label>
                    <input
                        type="password"
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link className='forgot-pass' to=''>Forgot password?</Link>
                <button className='btn' onClick={() => handleSubmitLogin()}>Login</button>
            </div>
            <div className='login-footer col-4 mx-auto text-center' onClick={() => navigate('/')}> &#60; &#60; &#60; Back to Homepage</div>
        </div>
    )
}
export default Login;