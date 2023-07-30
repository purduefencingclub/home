import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Index from "./pages/Index";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Beginner from "./pages/Beginner";
import faq from "./pages/FAQ";
import SignUp from "./pages/SignUp";


import { Provider } from "react-redux";

const App = () => {
  return (
      <BrowserRouter>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/officers" component={Officers} />
        <Route path="/join" component={Join} />
        <Route path="/contact" component={Contact} />
        <Route path="/beginner" component={Beginner} />
        <Route path="/faq" component={faq} />

        <Route path="/sign-up" component={SignUp} />
      </BrowserRouter>
  );
};

export default App;
