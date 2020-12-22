import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

import Parent from "./components/parent"


function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Parent} />
         
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;