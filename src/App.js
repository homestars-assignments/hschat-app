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
import ChannelContent from "./components/ChannelContent";
import { qsParam } from "./lib/vanillaTools";

// HOC wrap protected components
const ChannelsSecured = secured(MyChannels);
const AllChannelsSecured = secured(AllChannels);
const ChannelContentSecured = secured(ChannelContent);

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
                <ChannelsSecured loggedIn={this.isloggedIn()} token={this.token()} />
              </Route>
              <Route path="/discover"><AllChannelsSecured loggedIn={this.isloggedIn()} token={this.token()} /></Route>
              <Route path="/logout">
                <LoginOutScreen onByeBye={() => this.onByeBye()} />
              </Route>
              <Route path="/login">
                <LoginForm onTokenReceived={(token) => this.onTokenReceived(token)} />
              </Route>
              <Route path="/signup">
                ...
              </Route>
              <Route path="/channel">
                <ChannelContentSecured selected={qsParam('id')} loggedIn={this.isloggedIn()} token={this.token()} />
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

  onTokenReceived(token) {
    this.saveToken(token);
    window.location.href = '/';
  }

  onByeBye() {
    window.localStorage.removeItem('AUTH_TOKEN');
  }
}

export default App;
