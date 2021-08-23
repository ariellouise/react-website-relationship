import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Home.js";
import Chat from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Chat.js";
import Match from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Match.js";
import Inbox from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Inbox.js";
import Profile from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Profile.js";
import Myprofile from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/Myprofile.js";
import SignUp from "/Users/arielmurphy/Desktop/Relationshipfront/react-website-relationship/src/Components/pages/SignUp.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Chat" exact component={Chat} />
          <Route path="/Match" exact component={Match} />
          <Route path="/Inbox" exact component={Inbox} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Myprofile" exact component={Myprofile} />
          <Route path="/SignUp" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
