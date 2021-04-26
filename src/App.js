import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OneClass from "./oneClass";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/home">
                    <OneClass />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
