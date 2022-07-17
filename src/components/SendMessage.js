import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import styled from "styled-components";

const SendMessage = ({ scroll }) => {
  const [msg, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    if (msg !== "") {
      await db.collection("messages").add({
        text: msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper>
      <form onSubmit={sendMessage}>
        <div className="input">
          <input
            value={msg}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type="text"
          />
        </div>
        <img
          onClick={sendMessage}
          src="https://www.svgrepo.com/show/258748/send.svg"
          alt=""
          srcset=""
        />
      </form>
    </Wrapper>
  );
};

export default SendMessage;

const Wrapper = styled.div`
  height: 10%;
  display: flex;
  width: 100%;
  padding: 0.3rem 0 0rem 0;

  form {
    display: flex;
    width: 100%;
    align-items: center;

    img {
      height: 35px;
      width: 35px;
      margin-left: 0.3rem;
      cursor: pointer;
    }

    .input {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 2.9rem;
      border: 1px solid black;
      /* background-color: white; */
      background-color: #9cb4cc;
      border-radius: 30px;
      width: 100%;
      input {
        background-color: #9cb4cc;
        color: black;
        border: none;
        width: 90%;
        height: 2rem;
        outline: none;
        font-size: 15px;
        /* margin-left: 10px; */
      }
    }
  }
`;
