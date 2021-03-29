import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
