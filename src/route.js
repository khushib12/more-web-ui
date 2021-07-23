import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/home';
import Shop from './components/shopping';
import Shoe from "./components/shoe";
// import Contact from './components/contact';
// import Service from './components/service';

const Routes = () => {
  return (
      <BrowserRouter>
          <Switch> 
     <Route exact path='/' component={Homepage}></Route>
       <Route exact path='/Shop' component={Shop}></Route>
       <Route exact path='/Shoe' component={Shoe}></Route>
      {/* <Route exact path='/Contact' component={Contact}></Route>
      <Route exact path='/Service' component={Service}></Route>  */}

    </Switch>
      </BrowserRouter>

  );
}

export default Routes;