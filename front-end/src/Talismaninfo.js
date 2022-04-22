import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./info.css";

const Talismaninfo = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="infocontainer">
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={3}>
          <p>{data.name}</p>
        </Grid>
        <Grid item xs={7}>
          {data.image === null ? (
            <img src={"https://via.placeholder.com/200"} />
          ) : (
            <img src={data.image} />
          )}
        </Grid>
        <Grid item xs={4}>
          <p>{data.description}</p>
        </Grid>
        <Grid item xs={8}>
          <div className="griditem4">
            <p>{data.effect}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Talismaninfo;
