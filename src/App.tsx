import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import {Header} from './components/Header';

import {
    Dashboard,
    Profile,
    Order,
} from './features';

function App () {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/profile/:username" component={Profile}/>
                    <Route path="/order/:orderId" component={Order}/>
                    <Redirect to="/dashboard"/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
