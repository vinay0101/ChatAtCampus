import React, { useState } from "react";
import styled from "styled-components";
import SignOut from "./SignOut";
import Chat from "./Chat";
import Post from "./Post";
import PostsPage from "./PostsPage";

function NavBar() {
  const [state, setState] = useState(0);

  const chatChangeHandler = () => {
    setState(0);
  };

  const postChangeHandler = () => {
    setState(1);
  };

  console.log(state);
  return (
    <Wrapper>
      <Nav>
        <div className="nav-left">
          <div className="logo online">
            <img src="/images/looseleaf.png" />
          </div>
          <h1>ChatAtCampus</h1>
        </div>
        <div className="nav-right">
          <div>
            <button onClick={chatChangeHandler}>
              <h4>Chat</h4>
            </button>
          </div>
          <div>
            <button onClick={postChangeHandler}>
              <h4>Post</h4>
            </button>
          </div>
          <div>
            <SignOut />
          </div>
        </div>
      </Nav>
      {state === 0 ? <Chat /> : <PostsPage />}
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #748da6;
  width: 80%;
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 5px 5%;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 15%;
  //width: 100vw;

  .nav-left {
    display: flex;
    align-items: center;

    .logo img {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      cursor: pointer;
    }

    .online {
      position: relative;
    }

    .online::after {
      content: "";
      width: 7px;
      height: 7px;
      border: 2px solid #fff;
      border-radius: 50%;
      background: #41db51;
      position: absolute;
      top: 0;
      right: 0;
    }

    h1 {
      font-family: "Brush Script MT", cursive;
      margin-left: 15px;
      font-size: 30px;
      color: white;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    /* justify-content: space-around; */

    div {
      margin-right: 10px;

      button {
        padding: 0rem 1rem;
        background-color: #d3cedf;
        border-radius: 10px;
        color: #354259;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
