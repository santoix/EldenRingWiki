import * as React from "react";
import { Link } from "react-router-dom";
import MenuButton from "./menuButton";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Button className="navbutton" omponent={Link} to="/" variant="contained">
        Home
      </Button>
      <MenuButton
        name={"Items"}
        items={[
          { name: "weapons", link: "/weapons" },
          { name: "Ashes", link: "/Ashes" },
          { name: "Taslisman", link: "/Talisman" },
        ]}
      />
      <MenuButton name={"lore"} items={[{ name: "hugs", link: "/hugs" }]} />
      <div className="links">
        <h1>Elden Ring Wiki</h1>
      </div>
    </nav>
  );
};

export default Navbar;
