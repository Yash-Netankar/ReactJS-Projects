import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthCtx';
import "../../styles/login.css";

function Login() {

    const [Error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passRef = useRef();

    const {login} = useAuth();

    const Submit = async ()=>{
        // e.preventDefault();
        let res = "";

        try{
            setError('');
            setLoading(true);
            res = await login(emailRef.current.value, passRef.current.value);
        }catch(err){
            setError("Failed to Log in");
        }
        
        setLoading(false);
        return res;
    }

    return (
        <div className="login_container">
        <h1>Login</h1>
        <form>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} required autoComplete="on"/>

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" ref={passRef} required autoComplete="on"/>

            <button type="button" onClick={Submit} disabled={loading}>Login</button>

        </form>
        <h4>Need An Account? <Link to="/signup">Sign Up</Link></h4>
        <h4><Link to="/forgot">Forgot Password</Link></h4>
    </div>
    )
}

export default Login;
