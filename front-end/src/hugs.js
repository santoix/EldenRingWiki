import { useState } from "react";
import './hugs.css';



const Hugs = () => {

   
    const [img, setImg] = useState( <img src={require('./img/fiaasking.gif')} width="400" height="300" alt="cam"/>);

    const handleclick = () =>{
        setImg(<img src={require('./img/fiahug.gif')} width="400" height="300" alt="cam"/>);

    }

    return (
        <>
            {/* <div className="container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div> */}
            
            <div className="hugs">
                {img}
                <div className="chat">
                    <button className="awnser" onClick={handleclick}>Let her hold you</button>
                    <button className="awnser">Refuse</button>
                </div>
            </div>
        </>
    );
}
 
export default Hugs;