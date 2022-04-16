import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Elden Ring Wiki</h1>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/ashes">ashes</Link>
        <Link to="/lore">Lore</Link>
        <Link to="/">Themes</Link>
        <Link to="/hugs">hugs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
