import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MenuButton = ({ name, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuitems = items.map((item, i) => (
    <MenuItem onClick={handleClose} key={i}>
      <Link to={item.link}>{item.name}</Link>
    </MenuItem>
  ));

  return (
    <div className="navbuttonmenu">
      <Button
        id="button"
        className="navbutton"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "button",
        }}
      >
        {menuitems}
      </Menu>
    </div>
  );
};

export default MenuButton;
