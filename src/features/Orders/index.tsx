import React from 'react';
import {
    HashRouter as Router,
    RouteComponentProps,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import {
    List,
    Item,
} from './features';

export const Orders: React.FC<RouteComponentProps> = ({match}) => {
    return (
        <Router>
            <Switch>
                <Route exact path={`${match.path}`} component={List}/>
                <Route path={`${match.path}/:orderId`} component={Item}/>
                <Redirect to={`${match.path}`}/>
            </Switch>
        </Router>
    );
};
