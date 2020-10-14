import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Badges from '../pages/Badges/Badges';
import BadgeNew from '../pages/BadgeNew/BadgeNew';
import Home from '../pages/Home/Home';
import Layout from './Layout';
import NotFound from '../pages/NotFound/NotFound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;