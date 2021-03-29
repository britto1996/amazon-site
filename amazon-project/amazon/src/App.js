import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
