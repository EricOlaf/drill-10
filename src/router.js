import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Details from "./components/Details/Details";
import Products from "./components/Products/Products";

export default(
    <Switch>
        <Route exact path="/" component={Products}/>
        <Route path="/Details/:id" component={Details}/>
    </Switch>
);