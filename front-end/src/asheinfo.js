import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./asheinfo.css";

const Asheinfo = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="asheinfocontainer">
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
          <div className="griditemskill">
            <p>{data.affinity}</p>
            <p>{data.skill}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Asheinfo;
