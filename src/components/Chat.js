import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
// import NavBar from "./NavBar";
import styled from "styled-components";
// import SignOut from "./SignOut";
//import "./Chat.css";

const Chat = () => {
  const scroll = useRef();

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(25)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(messages);
  return (
    <Wrapper>
      {/* <div className="navbar">
        <NavBar />
      </div> */}

      <div className="container">
        <div className="texts">
          {messages.map(({ id, text, photoURL, uid }) => {
            return (
              <div>
                <div
                  key={id}
                  className={`message ${
                    uid === auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
          <div ref={scroll}></div>
        </div>
        <SendMessage scroll={scroll} />
      </div>
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #748da6;
  /* width: 80%; */
  height: 85%;

  .navbar {
    height: 15%;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* overflow-y: scroll; */
    padding: 10px;
    height: 100%;

    .texts {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
      height: 90%;

      .message {
        display: flex;
        align-items: center;
        img {
          border-radius: 50%;
          height: 40px;
          width: 40px;
          margin: 2px, 5px;
        }

        p {
          font-family: cursive;
          max-width: 500px;
          margin-left: 5px;
          margin-bottom: 12px;
          /* line-height: 24px; */
          padding: 10px 20px;
          position: relative;
          background: white;
          border-radius: 10px;
        }
      }
      .sent {
        flex-direction: row-reverse;
      }

      .sent p {
        margin-right: 5px;
        /* color: white; */
        background: #ef9f9f;
        align-self: flex-end;
      }
      .received p {
        background: #e5e5ea;
        color: black;
      }
    }
  }
`;
