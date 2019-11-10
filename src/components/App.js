import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import Header from "./common/Header";

import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route component={HomePage} exact path='/' />
        <Route component={CoursesPage} exact path='/courses' />
        <Route component={AboutPage} path='/about' />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
