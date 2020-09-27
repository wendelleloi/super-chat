import React, { useRef, useState } from "react";
import ChatMessage from "../ChatMessage";
import config from "./../../service/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const ChatRoom = () => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const dummy = useRef(null);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">send message</button>
      </form>
    </>
  );
};

export default ChatRoom;
