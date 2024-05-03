import Head from "next/head"
import Link from "next/link"
import PostList from "@/components/PostList"
import styles from "/styles/Profile.module.css"

export default function Profile() {
  return (
    <>
        <Head>
            <title>WorkShop Hub | Profile</title>
            <meta name="keywords" content="workshop,papimpat,community"></meta>
        </Head>
        <div className="container content">
          <h1 className="heading">Profile</h1>
          <div className={styles.section}>
            <div className={styles.profile}>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" width={150} height={150} alt="User"></img>
              <p>Vestibulum fringilla lobortis justo, vitae venenatis erat consequat sed. Aliquam egestas, ante quis dignissim luctus, mi sapien vulputate dolor, sagittis bibendum orci metus non ante. </p>
              <Link className="btn" href="#">Message</Link>
              <Link className="btn" href="#">Add</Link>
            </div>
            <div>
              <PostList/>
            </div>
          </div>
        </div>
    </>
    
  )
}
