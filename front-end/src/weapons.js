import { useEffect, useState } from "react";
import axios from "axios";
import "./displaydata.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

import { Link } from "react-router-dom";

const Weapons = () => {
  // const url1 = "/weapons";
  // const url2 = "/shields";
  const [url, setUrl] = useState("/shields");
  const [weapons, setWeapons] = useState([]);
  const [checker, setChecker] = useState(true);

  function handleChange() {
    if (checker == true) {
      setUrl("/weapons");
      setChecker(false);
    } else {
      setUrl("/shields");
      setChecker(true);
    }
  }

  const changeitems = (url) => {
    axios.get(url).then((response) => {
      //console.log(response);
      setWeapons(response.data);
    });
    console.log(url);
  };

  useEffect(() => {
    changeitems(url);
  }, [url]);

  if (weapons.length > 0) {
    return (
      <>
        <div className="weaponsshields">
          <p className="weaponsshields1">Weapons</p>
          <Switch
            className="weaponsshields1"
            onChange={() => handleChange()}
            checked={checker}
          />
          <p className="weaponsshields1">Shields</p>
        </div>
        <div className="weaponscontainer">
          {weapons?.map((weapon) => (
            <Card
              className="weaponscard"
              sx={{ maxWidth: 200 }}
              key={weapon.id}
            >
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
      </>
    );
  }
};

export default Weapons;
