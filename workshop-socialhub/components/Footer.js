import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>copyright 2024 | Papimpat Nimprasert</p>
            <Link href="/about">Contact Us</Link>
        </div>
      </div>
    </footer>
  )
}
