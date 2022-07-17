import React, { useState } from "react";
import styles from "../css/Post.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { auth, db } from "../firebase";

function Post() {
  // const [enteredLikes, setEnteredLikes] = useState(false);
  // const [totalenteredLikes, setTotalenteredLikes] = useState(0);

  // const clickHandler=()=>{

  //   const click = {
  //     likes: enteredLikes,
  //     totalLikes: totalenteredLikes,
  //   };
  //   props.onClickUpdate(click)
  // }

  return (
    <div className={styles.post_container}>
      <div className={styles.post_header}>
        <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

        <div className={styles.post_header_txt}>
          <div>
            <div className={styles.post_username}>Elon Musk</div>
            <div className={styles.post_time}>Few minutes ago</div>
          </div>
        </div>
      </div>

      <div className={styles.post_img}>
        <img src="https://images.pexels.com/photos/3605900/pexels-photo-3605900.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
      </div>

      <div className={styles.post_react}>
        <div className={styles.post_like}>
          Like
          <ThumbUpIcon fontSize="20px" className={styles.like}></ThumbUpIcon>
        </div>

        <div className={styles.post_comment}>
          Comments
          <CommentIcon fontSize="20px" className={styles.comment}></CommentIcon>
        </div>

        <div className={styles.post_share}>
          Share
          <ShareIcon fontSize="20px" className={styles.share}></ShareIcon>
        </div>
      </div>
    </div>
  );
}

export default Post;
