import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./displaydata.css";

const Main = () => {
  const url = "/getmain";
  const [main, setMain] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      //console.log(response);
      setMain(response.data);
    });
  }, []);

  if (main.length > 0) {
    return (
      <>
        <div className="divpick">
          <h1>Pick your class</h1>
        </div>
        <div className="maincontainer">
          {main?.map((main1) => (
            <Card className="maincard " sx={{ maxWidth: 500 }}>
              {main1.image === null ? (
                <img src={"https://via.placeholder.com/200"} />
              ) : (
                <img src={main1.image} />
              )}
              <CardContent>
                <Typography gutterBottom variant="p" component="div">
                  {main1.name}.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Name: {main1.name}.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  }
};

export default Main;
