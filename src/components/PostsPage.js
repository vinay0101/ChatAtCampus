import React, { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "../css/PostPage.module.css";
// import Post from "../components/Post";
import PostSend from "../components/PostSend";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import Post from "./Post";
// import Post from "./Post";
// import { storage } from "../firebase";
//import { doc, getDoc } from "firebase/firestore";
// import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage, db } from "../firebase";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState(0);
  //const docRef = doc(db, "posts", "SF");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    db.collection("posts")
      .get()
      .then((q) => {
        q.forEach((e) => {
          let obj = e.data();
          setPosts((item) => [...item, obj]);
          //console.log(posts)
        });
      });
  };
  // const imageList = ref(storage, "images/");
  // const textList = ref(storage, "text/");
  // useEffect(() => {
  //   listAll(imageList).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImgUrls((prev) => [...prev, url]);
  //       });
  //     });
  //     listAll(textList).then((response) => {
  //       response.items.forEach((data) => {
  //         getDownloadURL(data).then((uri) => {
  //           setTextUrls((obj) => [...obj, uri]);
  //         });
  //       });
  //     });
  //     console.log(imgUrls);
  //     console.log(textUrls);
  //   });
  // }, []);

  return (
    <Wrapper>
      <div className={styles.post_page}>
        <PostSend></PostSend>
        {posts.map((item) => {
          //setState(state+1);
          console.log(posts);
          return <Post key={1 + state} />;
        })}
      </div>
    </Wrapper>
  );
};

export default PostsPage;

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #748da6;
  /* width: 80%; */
  height: 85%;
  overflow-y: scroll;
`;

const PostsBar = styled.div`
  background-color: grey;
  height: 9.375rem;
  width: 75rem;
  margin-left: 9.375rem;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > p {
    padding-left: 20px;
    padding-top: 10px;
  }
  > input {
    width: 50rem;
    height: 3.125rem;
    margin-top: 20px;
  }
`;

const PostOptions = styled.div`
  margin-top: 50px;
  //background-color: red;

  > button {
    background-color: green;
  }
`;
