import Navbar from "./Navbar";
import Main from "./main";
import Lore from "./lore";
import Hugs from "./hugs";
import Ashes from "./ashes";
import Asheinfo from "./asheinfo";
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
            <Route path="/lore" element={<Lore />} />
            <Route path="/hugs" element={<Hugs />} />
            <Route path="/asheinfo" element={<Asheinfo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
