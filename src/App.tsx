import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import {Header} from './components';

import {
    Profile,
    Orders,
    Freelancers,
} from './features';

function App () {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/profile/:username" component={Profile}/>
                    <Route path="/freelancers" component={Freelancers}/>
                    <Redirect to="/orders"/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
