import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Box} from "@material-ui/core";
import Pluto from "./components/404";
import Home from "./components/Home";

function App() {
  return (
    <Box className="App enter" position="relative">
      <BrowserRouter>
          <Switch>
              <Route path={"/"} exact component={Home}/>
              <Route component={Pluto}/>
          </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
