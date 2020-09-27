import React from "react";
import firebase from "firebase/app";

const SignOut = (pros) => {
  const auth = firebase.auth();
  const { text, uid, photoURL } = pros.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="TumbNail user" />
      <p>{text}</p>
    </div>
  );
};

export default SignOut;
