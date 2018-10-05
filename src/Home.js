import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login, {LoginOG} from './Login'
import Register, {RegisterOG} from './Register'
import App from './App'

export const Home = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>

<hr />

    <Route exact path="/Home" component={App} />
    <Route path="/Login" component={Login} />
    <Route path="/Register" component={Register} />
</div>
</Router>
);


export default Home;