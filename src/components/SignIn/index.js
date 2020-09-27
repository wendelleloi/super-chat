import React from "react";
import firebase from "firebase/app";
import config from "./../../service/firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

const SignIn = () => {
  const sigInwithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={sigInwithGoogle}>Sign with Google</button>;
};

export default SignIn;
