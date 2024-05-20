import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/recipes/recipes')
      .then(response => response.json())
      .then(data => {
        const firstTenPosts = data.slice(0, 15);
        setPosts(firstTenPosts);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการเรียกข้อมูล:', error);
      });
  }, []);

  return (
    <div className="post-grid">
      {posts.map(post => (
        <div key={post.id} className="post-card">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-updatedAt">{post.cuisine}</p>
        <img className="post-img" src={post.photoUrl} width={300} height={200} alt={post.slug}></img>
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
