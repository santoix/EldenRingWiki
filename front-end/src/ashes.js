import { useEffect, useState } from "react";
import axios from "axios";


const Ashes = () => {

    // const [name, setName] = useState('teste');

    // const handClick = () => {
    //    setName('Pass');
    // }

   
      const url = '/getashes';
      const [ashes, setAshes] = useState([]);
      
    
      useEffect (() => {

          axios.get(url).then(response => {
            //console.log(response);
            setAshes(response.data.data);
          })

      }, [])
    
    console.log(ashes);
    
    if(ashes.length > 0){
      return (
      <>
        <div>
              <p>{ashes[0].name}</p>
              <img src={ashes[0].image}/>
              <p>{ashes[0].affinity}</p>
              <p>{ashes[0].description}</p>
              <p>{ashes[0].skill}</p>
              
        </div>
      </>
      );
    }
    return (
      <>
        <div>
              <p>oi</p>
        </div>
      </>
    );
} 
export default Ashes;
