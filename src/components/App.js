import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <div className='container-fluid'>
      <Route component={HomePage} exact path='/' />
      <Route component={AboutPage} path='/about' />
    </div>
  );
}

export default App;
