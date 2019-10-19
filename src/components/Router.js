import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import SelectTrip from './SelectTrip';
import CreateTrip from './CreateTrip';

const RouterArea = () => {
    return(
        <Router>
            <Scene key="body" hideNavBar>
                <Scene key="login">
                    <Scene component={CreateTrip} title="Login" />
                </Scene>
                <Scene key="selectTrip">
                    <Scene component={SelectTrip} title="Select Trip" />
                </Scene>
                <Scene key="createTrip">
                    <Scene component={CreateTrip} title="Create Trip" />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterArea;