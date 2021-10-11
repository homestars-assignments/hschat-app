import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import logo from "./logo.svg";
import "./App.css";

import secured from "./lib/secured";

import MyChannels from "./components/MyChannels";
import LoginForm from "./components/LoginForm";
import LoginOutScreen from "./components/LoginOutScreen";
import LoginLink from "./components/authLinks";
import AllChannels from "./components/AllChannels";

// HOC wrap protected components
const ChannelsSecured = secured(MyChannels);
const AllChannelsSecured = secured(AllChannels);

// Main app
class App extends React.Component {
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
                  <LoginLink loggedIn={this.isloggedIn()} />
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <ChannelsSecured />
              </Route>
              <Route path="/discover"><AllChannelsSecured /></Route>
              <Route path="/logout">
                <LoginOutScreen />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/signup">
                ...
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }

  token() {
    return window.localStorage.getItem("AUTH_TOKEN");
  }

  isloggedIn() {
    return this.token() !== null;
  }

  saveToken(value) {
    return window.localStorage.setItem("AUTH_TOKEN", value);
  }
}

export default App;
