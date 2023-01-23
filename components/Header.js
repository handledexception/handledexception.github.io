import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <h1><font color="red">r</font><font color="green">g</font><font color="blue">b</font>_t</h1>
      <div>
        <Link href="/">
          Blog
        </Link>
        <Link href="/">
          About
        </Link>
      </div>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
