import { useEffect, useState } from "react";
import axios from "axios";
import "./ashes.css";

const Ashes = () => {
  // const [name, setName] = useState('teste');

  // const handClick = () => {
  //    setName('Pass');
  // }

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
          <div className="box1">
            <p>{ashe.name}</p>
            {ashe.image === null ? (
              <img src={"https://via.placeholder.com/200"} />
            ) : (
              <img src={ashe.image} />
            )}
            <p>{ashe.affinity}</p>
            {console.log(ashe.name)}
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div>
        <p>Loading</p>
      </div>
    </>
  );
};
export default Ashes;
