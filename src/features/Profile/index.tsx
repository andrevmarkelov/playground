import React from 'react';

import {SimpleComponent} from '../../components';
import {Header} from '../../components/Header';

export const Profile: React.FC = () => {
    return (
        <div>
            <Header/>
            <div>Profile</div>
            <SimpleComponent name="John" age={22} show/>
        </div>
    );
};
