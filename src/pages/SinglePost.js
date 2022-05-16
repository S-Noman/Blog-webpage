import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./SinglePost.css";
import Comments from "./Comments";

const SinglePost = () => {
  const [post, setPost] = useState("");
  const { title, date, thumbnail, tags, content } = post;
  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json.data);
      });
  }, []);

  return (
    <div className="overall-container">
      <div className="sub-container">
        <div className="SinglePostContainer">
          <div>
            <img src={thumbnail} alt={title} />
            <div>
              <p>
                <small>{date}</small>
              </p>
              {post && (
                <div>
                  <h1>{title}</h1>
                  {parse(content)}
                </div>
              )}
              <p>
                <small>{tags}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar-fixed">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
