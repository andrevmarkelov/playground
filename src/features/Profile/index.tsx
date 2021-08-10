import React from 'react';

import {SimpleComponent} from '../../components';

export const Profile: React.FC = () => {
    return (
        <>
            <div>Profile</div>
            <SimpleComponent name="John" age={22} show/>
        </>
    );
};
