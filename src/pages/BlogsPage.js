import React, { useEffect } from "react";
import { useState } from "react";
import PostCard from "./PostCard";
import Comments from "./Comments";
import './BlogsPage.css';

const BlogsPage = () => {
  const [posts, setPosts] = useState([
    {
      title: "",
      date: "",
      excerpt: "",
      thumbnail: "",
      slug: "",
      tags: [ "  " ],
      views: 0,
    },
  ]);

  const [flag, setFlag] = useState(0);
  const [noMore, setNoMore] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [more, setMore] = useState([]);

  const loadMore = () => {
    setPage(page + 1);

    if (page > 3) setNoMore(1);
    fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setMore([...more, ...json.data]);
      });
    setFlag(1);
  };

  useEffect(() => {
    fetch(`https://www.wp-course.site/wp-json/youthink/posts`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.data);
      });
  }, [!posts]);

  return (
    <div className="overall-container">
    <div className="sub-container">
      <div>
      {posts.map((post, i) => {
          return <PostCard post={post} key={i} />;
        })}
        {flag === 1
          ? more.map((post, i) => {
              return <PostCard post={post} key={i} />;
            })
          : ""}
      </div>
      <div className="sidebar-fixed" >
        <Comments />
      </div>
      </div>
      {noMore === 0 ? (
        <div className="d-grid gap-2 col-2 mx-auto mb-3">
          <button className="btn btn-primary" type="button" onClick={loadMore}>
            Load more
          </button>
        </div>
      ) : (
        ""
      )}
    </div>   
  );
};

export default BlogsPage;
