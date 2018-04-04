/**  
 * client | src | App.js
 * Switch to different Routers
*/
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Home";
import Detail from "./pages/Admin";
import Detail from "./pages/AdminDashboard";
import NoMatch from "./pages/NoMatch";
{/* import Nav from "./components/Nav";*/}

const App = () =>
  <Router>
    <div>
    {/*  <Nav />*/}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/adminDashboard" component={AdminDashboard} />

      {/*<Route exact path="/" component={Books} />*/}
      {/* <Route exact path="/books" component={Books} />*/}
      {/*<Route exact path="/books/:id" component={Detail} />*/}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
