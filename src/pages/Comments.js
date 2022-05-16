import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import parse from "html-react-parser";
import './Comments.css'

const Comments = () => {
  
  const [comments, setComments] = useState([
    {
      author_name: " ",
      author_avatar_urls: [24],
      content: {rendered : " "},
    },
  ]);

  useEffect(() => {
    fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
  }, [!comments]);

  return (
    <div className="comments-menue">
    <div className="sidebar-container">
    <div className="content">
      {comments.map((comment, id) => {
        const { author_name, author_avatar_urls, content} = comment;
        return (
          <div className="sidebar-links" key={id}>
            <img  className="avatar" src={author_avatar_urls[24]} alt="..." />
            <strong>{author_name}</strong>
            {comments && <div>{parse(content.rendered)}</div>}
            <hr/> 
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
};

export default Comments;

