import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts')
      .then(response => response.json())
      .then(data => {
        const firstTenPosts = data.slice(0, 10);
        setPosts(firstTenPosts);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการเรียกข้อมูล:', error);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post-card">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-updatedAt">{post.updatedAt}</p>
        <img className="post-img" src={post.image} width={500} height={300} alt={post.slug}></img>
        <div className="action-btn">
          <button className="btn" type="button">Like</button>
          <button className="btn" type="button">Comment</button>
          <button className="btn" type="button">Share</button>
        </div>
      </div>
      ))}
    </div>
  );
}

export default PostList;
