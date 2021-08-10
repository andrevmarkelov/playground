import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {
    Dashboard,
    Profile,
} from './features';

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/profile" component={Profile}/>
                <Redirect to="/dashboard"/>
            </Switch>
        </Router>
    );
}

export default App;
