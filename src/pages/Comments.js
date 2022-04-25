import React from "react";

const Comments = ({ comment }) => {
  const { date, author_name, author_avatar_urls, content } = comment;
  
  return (
    <div>
      <p>{date}</p>
      <p>{author_name}</p>
      <img src={author_avatar_urls}/>
      <p>{content}</p>
    </div>
  );
};

export default Comments;
