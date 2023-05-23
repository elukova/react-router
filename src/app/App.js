import NavBar from "./components/navBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
// import Stats from "./components/stats";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>App</h1>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Posts} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
