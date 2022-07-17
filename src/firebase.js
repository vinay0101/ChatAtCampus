// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDn574eb0h-XlTOLLJDnxXbKe5hN3ZdBjs",
//   authDomain: "firechat-58e9e.firebaseapp.com",
//   projectId: "firechat-58e9e",
//   storageBucket: "firechat-58e9e.appspot.com",
//   messagingSenderId: "959742702575",
//   appId: "1:959742702575:web:984d627f142c22bf797c1a",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA782L42I1yx11Xqpti1N63ySJ1i012hjI",
  authDomain: "dummy-project-7d371.firebaseapp.com",
  projectId: "dummy-project-7d371",
  storageBucket: "dummy-project-7d371.appspot.com",
  messagingSenderId: "785427877271",
  appId: "1:785427877271:web:d620bcbd5e5302c68f08d2",
  measurementId: "G-0Q98PRV12K",
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
