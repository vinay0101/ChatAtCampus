import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import styled from "styled-components";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <SignInPage>
      <h1>ChatAtCampus</h1>
      <button onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/color/344/google-logo.png"></img>
        <h3>Sign in with Google</h3>
      </button>
    </SignInPage>
  );
}

export default SignIn;

const SignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #748da6;
  width: 350px;
  height: 50%;
  border-radius: 5%;
  padding: 0.5rem 1rem;
  /* width: 14rem; */

  h1 {
    font-family: "Brush Script MT", cursive;
  }

  button {
    border-radius: 5%;
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      height: 30px;
      width: 30px;
    }
  }
`;
