import React, { useEffect } from "react";
import { useState } from "react";
import PostCard from "./PostCard";
import Comments from "./Comments";

const BlogsPage = () => {
  const [posts, setPosts] = useState([
    {
      title: "",
      date: "",
      excerpt: "",
      thumbnail: "",
      slug: "",
      tags: [""],
      views: 0,
    },
  ]);

  const [comments, setComments] = useState([
    {
      author_name: '',
      date: "",
      author_avatar_urls: '',
      content: '',
    },
  ]);

  const [flag, setFlag] = useState(0);
  const [noMore, setNoMore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [more, setMore] = useState([]);
  
  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
    
    if (page > 3) setNoMore(1);
    fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setMore([...more, ...json.data]);
        setLoading(false);
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


  useEffect(() => {
    fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
      .then((response) => response.json())
      .then((json) => {
        setComments(json);
      });
  }, []);

  return (
    <>
          <div>
        {posts.map((post, i) => {
          return <PostCard post={post} key={i} />;
        })}
        {flag == 1
          ? more.map((post, i) => {
              return <PostCard post={post} key={i} />;
            })
          : ""}
      </div>
      {noMore == 0 ? (
        <button type="button" disabled={loading} onClick={loadMore}>
          Load more
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogsPage;

{
  /* <div className="col-4 my-3">
        <Comments comment={comment}/>
      </div> */
}
{
  /* {comments.map((comment) => {
        return <Comments comment={comment}/>;
      })} */
}
