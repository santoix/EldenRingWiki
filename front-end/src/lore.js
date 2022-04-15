import { useEffect, useState } from "react";
import axios from "axios";
import "./ashes.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Lore = () => {
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
      <div className="ashecontainer">
        {ashes?.map((ashe) => (
          <Card className="card1" sx={{ maxWidth: 200 }}>
            {ashe.image === null ? (
              <img src={"https://via.placeholder.com/200"} />
            ) : (
              <img src={ashe.image} />
            )}
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {ashe.name}.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lore Test Affinity: {ashe.affinity}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
};

export default Lore;
