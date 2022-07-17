import React from "react";
import { auth } from "../firebase.js";
import styled from "styled-components";

function SignOut() {
  return (
    <SingOutPage>
      <button onClick={() => auth.signOut()}>
        <h4>Sign Out</h4>
      </button>
    </SingOutPage>
  );
}

export default SignOut;

const SingOutPage = styled.div`
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
`;
