import Link from "next/link";

const NavLink = ({href, name}) => {
  return (
    <Link href={href} passHref>
      {name}
    </Link>
  )
};

const Header = () => {
  return (
    <nav>
      <h1>Handled Exception</h1>
      A blog by Paul Hindt
      <div>
        <NavLink href="/" name="Blog" />&nbsp;|&nbsp;
        <NavLink href="https://github.com/handledexception" name="Github" />
      </div>
      <style jsx>
        {`
          nav {
            background: #493458;
            width: auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1rem;
          }
      `}</style>
    </nav>
  );
}

export default Header;
