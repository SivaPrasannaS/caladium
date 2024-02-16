import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/auth.css';
import auth_bg from '../../assets/images/auth_bg.jpeg';
import { signIn } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { setAuthentication, setToken, setUser } from '../../redux/authSlice';
import { jwtDecode } from 'jwt-decode';
import { Alert, Space } from 'antd';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [alert, setAlert] = useState({
        show: false,
        message: "",
        type: ""
    })

    const handleFormSubmit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setAlert({
                ...alert,
                show: true,
                message: "Please enter valid email and password",
                type: "warning"
            })
            return;
        }

        const form = {
            email: email,
            password: password
        }

        signIn(form).then((res) => {
            if (res?.data?.token) {
                dispatch(setAuthentication(true))
                dispatch(setToken(res?.data?.token));
                dispatch(setUser(jwtDecode(res?.data?.token).user));
                navigate((jwtDecode(res?.data?.token).user.role === 'USER') ? '/user/home' : '/admin/dashboard');
            }
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }).catch((err) => console.log(err));
    }

    return (
        <div style={{ height: '100lvh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${auth_bg})` }} >
            <div className="container">
                <div className="form">
                    <h1 className="title">Sign In</h1>
                    {alert.show && (
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                                marginBottom: '5%'
                            }}
                        >
                            <Alert message={alert.message} type={alert.type} showIcon closable />
                        </Space>
                    )}
                    <div className="group">
                        <input type="email" required className="group_input" placeholder='Email' ref={emailRef} />
                    </div>
                    <div className="group">
                        <input type="password" required className="group_input" placeholder='Password' ref={passwordRef} />
                    </div>
                    <button className="sign_in" onClick={handleFormSubmit}>Sign In</button>
                    <div className="cta">
                        <Link to="/remember_me" className="cta_text">Remember me</Link>
                        <Link to="/help" className="cta_text cta_text_need_help">Need help?</Link>
                    </div>
                    <div className="form_text">
                        <p>New to Caladium? <Link to="/sign_up" className='next_auth'>Sign up now</Link>.</p>
                    </div>
                    <div className="form_text_secondary">
                        <p>
                            <br />This page is protected by Google reCAPTCHA to<br />
                            ensure you&apos;re not a bot. <Link to="/learn_more" className='learn_more'>Learn more</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login