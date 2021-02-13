import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthCtx';
import "../../styles/signup.css";
import fb from "firebase/app";

function SignUp() {
    const [SignInError, setSignInError] = useState('');
    const [loading, setLoading] = useState();

    const numberRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const cpassRef = useRef();

    const {signUp} = useAuth();

    const Submit = async (e)=>{
        e.preventDefault();
        
        if(passRef.current.value !== cpassRef.current.value){
            return setSignInError("Passwords Does Not Match");
        }

        try{
            setSignInError('');
            setLoading(true)
            let recaptcha = new fb.auth.RecaptchaVerifier("recaptcha", {
                size: "invisible",
                callback: function(){
                    console.log("Verifying Your Captcha")
                }
              });
            let number = numberRef.current.value;
            await signUp(emailRef.current.value, passRef.current.value, number, recaptcha);
        }
        catch(err){
            setSignInError("Creation of Account Failed!!");
        }

        setLoading(false);
    }

    return (
        <div className="signUp_container">
            <h1>Sign Up</h1>
            {
                SignInError && alert(SignInError)
            }
            <form onSubmit={Submit} autoComplete="off">

                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required autoComplete="on"/>

                <label htmlFor="mob">Mobile No</label>
                <input type="text" id="mob" ref={numberRef} required autoComplete="on" placeholder="Begin with +91"/>
                <small>Eg: +91(10-digit-number)</small>

                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" ref={passRef} required autoComplete="on"/>
                <small>Length Must Be Greater than 6</small>

                <label htmlFor="cpass">Confirm Password</label>
                <input type="password" id="cpass" ref={cpassRef} required autoComplete="on"/>

                <button disabled={loading}>Submit</button>

            <div id="recaptcha"></div>
            </form>
            <h4>Already Have An Account? <Link to="/login">Login</Link></h4>
        </div>
    )
}

export default SignUp;
