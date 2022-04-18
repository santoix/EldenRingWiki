import Navbar from "./Navbar";
import Main from "./main";
import Hugs from "./hugs";
import Ashes from "./ashes";
import Asheinfo from "./asheinfo";
import Weapons from "./weapons";
import Weaponinfo from "./weaponinfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/ashes" element={<Ashes />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/hugs" element={<Hugs />} />
            <Route path="/asheinfo" element={<Asheinfo />} />
            <Route path="/weaponinfo" element={<Weaponinfo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
