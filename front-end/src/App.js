import Navbar from './Navbar';
import Main from './main'; 
import Lore from './lore';
import Hugs from './hugs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/lore">
            <Lore/>
          </Route>
          <Route exact path="/hugs">
            <Hugs/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
