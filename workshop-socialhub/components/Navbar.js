import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
            <Link href="/">WorkShop Hub</Link>
        </div>
        <div className="list">
          <Link className="nav-list" href="/message">Message</Link>
          <Link className="nav-list" href="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  )
}
