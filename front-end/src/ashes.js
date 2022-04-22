import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./displaydata.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Ashes = () => {
  const url = "/getashes";
  const [ashes, setAshes] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      //console.log(response);
      setAshes(response.data);
    });
  }, []);

  console.log(ashes);

  if (ashes.length > 0) {
    return (
      <div className="anycontainer">
        {ashes?.map((ashe) => (
          <Card className="card1" key={ashe.id} sx={{ maxWidth: 200 }}>
            {ashe.image === null ? (
              <img src={"https://via.placeholder.com/200"} />
            ) : (
              <img src={ashe.image} height="200px" width="200px" />
            )}
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                <Link to="/asheinfo" state={ashe}>
                  {ashe.name}.
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Affinity: {ashe.affinity}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
};

export default Ashes;
