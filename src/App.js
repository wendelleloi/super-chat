import React from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import config from "./service/firebaseConfig";

//FIREBASE IMPORTS

//FIREBASE SDKS
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//FIREBASE HOOKS
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user.displayName, "user");
  }
  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
