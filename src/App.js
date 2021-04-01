import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import Home from './components/';
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import test from "./components/test";

import noMatch from "./components/noMatch";
//importez resume aici ca sa l rutez
{/*cssbaseline - scapam de paddingul generic si ce mai era + tine minte sa nu mai pui commenturi intre importuri*/}
function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/test" component={test} />

      <Route component={noMatch} />
      </Switch>
    </>
  );
}

export default App;
