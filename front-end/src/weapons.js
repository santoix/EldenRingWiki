import { useEffect, useState } from "react";
import axios from "axios";
import "./displaydata.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Weapons = () => {
  const url = "/weapons";
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      //console.log(response);
      setWeapons(response.data);
    });
  }, []);

  if (weapons.length > 0) {
    return (
      <div className="weaponscontainer">
        {weapons?.map((weapon) => (
          <Card className="weaponscard" sx={{ maxWidth: 200 }}>
            {weapon.image === null ? (
              <img src={"https://via.placeholder.com/200"} />
            ) : (
              <img src={weapon.image} />
            )}
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                <Link to="/weaponinfo" state={weapon}>
                  {weapon.name}.
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {weapon.category}.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
};

export default Weapons;
