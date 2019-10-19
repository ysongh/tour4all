import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import SelectTrip from './SelectTrip';

const RouterArea = () => {
    return(
        <Router>
            <Scene key="body" hideNavBar>
                <Scene key="login">
                    <Scene component={Login} title="Login" />
                </Scene>
                <Scene key="selectTrip">
                    <Scene component={SelectTrip} title="Select Trip" />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterArea;