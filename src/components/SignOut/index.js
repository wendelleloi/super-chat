import React from "react";
import firebase from "firebase/app";

const auth = firebase.auth();

const SignOut = () => {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
};

export default SignOut;
