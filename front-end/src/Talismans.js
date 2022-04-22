import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./displaydata.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Talismans = () => {
  const url = "/talismans";
  const [talismans, setTalismans] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      //console.log(response);
      setTalismans(response.data);
    });
  }, []);

  if (talismans.length > 0) {
    return (
      <div className="ashecontainer">
        {talismans?.map((talisman) => (
          <Card className="card1" key={talisman.id} sx={{ maxWidth: 200 }}>
            {talisman.image === null ? (
              <img src={"https://via.placeholder.com/200"} />
            ) : (
              <img src={talisman.image} height="200px" width="200px" />
            )}
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                <Link to="/talismaninfo" state={talisman}>
                  {talisman.name}.
                </Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
};

export default Talismans;
