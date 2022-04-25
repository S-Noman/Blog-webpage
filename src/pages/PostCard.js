import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, date, excerpt, thumbnail, tags, slug } = post;

  return (
    <Link to={`/blog/${slug}`}>
      <div className="card m-5 " style={{ width: "800px" }}>
        <img src={thumbnail} className="card-img-top mx-auto" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{excerpt}</p>
          <p className="card-text">
            <small className="text-muted">{date}</small>
          </p>
          <p>
            <small className="text-muted p-2">{tags}</small>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
