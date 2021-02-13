import firebase from 'firebase/app';
import  "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBSE_apikey,
    authDomain: process.env.REACT_APP_FIREBSE_authDomain,
    projectId: process.env.REACT_APP_FIREBSE_projectId,
    storageBucket: process.env.REACT_APP_FIREBSE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBSE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBSE_appId
})

export const auth = app.auth();
export default app;