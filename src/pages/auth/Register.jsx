import { Link } from 'react-router-dom';
import '../../assets/css/auth.css';
import auth_bg from '../../assets/images/auth_bg.jpeg';
import { useRef } from 'react';
import { signUp } from '../../services/auth';

const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleFormSubmit = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const form = {
            name: name,
            email: email,
            password: password
        }
        signUp(form);
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (
        <div style={{ height: '100lvh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${auth_bg})` }} >
            <div className="container">
                <div className="form">
                    <h1 className="title">Sign Up</h1>
                    <div className="group">
                        <input type="text" required className="group_input" name='name' placeholder='Name' ref={nameRef} />
                    </div>
                    <div className="group">
                        <input type="email" required className="group_input" name='email' placeholder='Email' ref={emailRef} />
                    </div>
                    <div className="group">
                        <input type="password" required className="group_input" name='password' placeholder='Password' ref={passwordRef} />
                    </div>
                    <button className="sign_up" onClick={handleFormSubmit}>Sign Up</button>
                    <div className="form_text">
                        <p>Existing Caladium User? <Link to="/sign_in" className='next_auth'>Sign in here</Link>.</p>
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

export default Register