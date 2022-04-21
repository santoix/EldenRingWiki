import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home </Link>
      <Link to="/ashes">ashes</Link>
      <Link to="/weapons">weapons</Link>
      <Link to="/">Themes</Link>
      <Link to="/hugs">hugs</Link>

      <div className="links">
        <h1>Elden Ring Wiki</h1>
      </div>
    </nav>
  );
};

export default Navbar;
