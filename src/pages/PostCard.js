import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { title, date, excerpt, thumbnail, tags, slug } = post;

  return (
    <div className="card m-5 " style={{ width: "800px" }}>
      <Link to={`/blog/${slug}`}>
        <img src={thumbnail} className="card-img-top mx-auto" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{excerpt}</p>
          <p className="card-text">
            <small className="text-muted">{date}</small>
          </p>
            {tags &&
              tags.map((tag, index) => (
                <small className="text-muted " key={index}>
                  {`${index == tags.length - 1 ? tag : tag + " , "}`}
                </small>
              ))}
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
