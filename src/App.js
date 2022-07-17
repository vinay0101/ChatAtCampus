import React from "react";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import NavBar from "./components/NavBar";

function App() {
  const [user] = useAuthState(auth); //If the user returned within the handler is null we assume the user is currently signed-out, otherwise they are signed-in and a User interface is returned.

  console.log(user);
  return <Wrapper>{user ? <NavBar /> : <SignIn />}</Wrapper>;
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2d7d9;
  height: 100vh;
`;
// import styled from "styled-components";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase.js";

// import SignIn from "./components/SignIn";
// import Chat from "./components/Chat";

// function App() {
//   const [user] = useAuthState(auth);

//   if (!user) {
//     return (
//       <Wrapper>
//         <div className="container">
//           <SignIn />
//         </div>
//       </Wrapper>
//     );
//   }
//   return (
//     <Page>
//       <Chat />
//     </Page>
//   );
// }

// const Wrapper = styled.div`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   background-color: antiquewhite;
//   height: 100vh;
// `;
// const Page = styled.div`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   display: flex;
//   align-items: center;
//   background-color: azure;

//   height: 100vh;
// `;
// export default App;
