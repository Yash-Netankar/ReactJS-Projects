import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthCtx';
import "../../styles/login.css";

function Forgot() {

    const [Error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [Msg, setMsg] = useState("");

    const emailRef = useRef();

    const {resetPassword} = useAuth();

    const Submit = async (e)=>{
        e.preventDefault();

        try{
            setMsg("");
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMsg("Check Out Your Email Inbox")
        }catch{
            setError("Failed To Reset Password");
        }

        setLoading(false);
    }

    return (
        <div className="login_container">
        <h1>Forgot Password</h1>
        {
            Error && alert(Error)
        }
        <form onSubmit={Submit} autoComplete="off">

            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} required autoComplete="on"/>

            <button type="submit" disabled={loading}>Reset Password</button>

            <h3>{Msg}</h3>

        </form>
        <h4>Need An Account? <Link to="/signup">Sign Up</Link></h4>
        <h4>Need An Account? <Link to="/login">Login</Link></h4>
    </div>
    )
}

export default Forgot
