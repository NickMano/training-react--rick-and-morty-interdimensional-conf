import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Badges from '../pages/Badges/Badges';
import BadgeNew from '../pages/BadgeNew/BadgeNew';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
    </BrowserRouter>
)

export default App;