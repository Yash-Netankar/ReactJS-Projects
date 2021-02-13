import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import fb from "firebase/app";
import { useHistory} from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthCtx({ children }) {
  const [CurrentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const signUp = (email, password, number, recaptcha) => {
    auth.signInWithPhoneNumber(number, recaptcha).then(function (confirmationResult) {
        let code = prompt("Enter the OTP sent to your mobile number");
        if (code === null) return;
        window.confirmationResult = confirmationResult;
        confirmationResult.confirm(code).then(function () {
            let credential = fb.auth.EmailAuthProvider.credential(email, password);
            auth.currentUser.linkWithCredential(credential).then(function (usercred) {
                let user = usercred.user;
                alert("Account linking success", user);
                history.push("/login");
              })
              .catch(function (error) {
                alert("Account linking error", error);
              });
            // auth.createUserWithEmailAndPassword(email, password);
          })
          .catch((err) => {
            alert("Sign Up Failed Due to some Technical Reasons");
            console.log(err)
          });
      });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then(()=>{
      history.push("/");
    }).catch(()=>{
      alert("Failed to Log In")
    })
  };

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);

  const value = {
    CurrentUser,
    signUp,
    login,
    logout,
    resetPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </div>
  );
}
