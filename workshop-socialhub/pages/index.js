import Head from "next/head"
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <>
      <Head>
        <title>WorkShop Hub | Home</title>
        <meta name="keywords" content="workshop,papimpat,community"></meta>
      </Head>
      <div className="container content">
          <h1 className="heading">Community</h1>
        <div className="post">
          <input type="textarea" placeholder="Post your feeling."></input>
          <button className="btn" type="button">Post</button>
        </div>
        <PostList/>
      </div>
      
    </>
  );
}