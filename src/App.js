import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Channels from "./components/Channels";
import LoginForm from "./components/LoginForm";
import LoginOutScreen from "./components/LoginOutScreen";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <div src={logo} className="App-logo" alt="logo">
              🗨
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/" title="Your channels">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/discover" title="Join new channels">
                    Discover
                  </a>
                </li>
                <li>
                  <LoginLink />
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Channels />
              </Route>
              <Route path="/discover">All Channels 📢</Route>
              <Route path="/logout">
                <LoginOutScreen />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

function LoginLink(props) {
  if (token()) return <ShowLogout />;
  return <ShowloginAndSignUp />;
}

function ShowloginAndSignUp(props) {
  return (
    <div>
      <a href="/login">Login</a> / <a href="/signup">SignUp</a>
    </div>
  );
}

function ShowLogout(props) {
  return <a href="/logout">Logout</a>;
}

function token() {
  return window.localStorage.getItem("AUTH_TOKEN");
}

function saveToken(value) {
  return window.localStorage.setItem("AUTH_TOKEN", value);
}

export default App;
