import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import SelectTrip from './SelectTrip';
import SelectTripUser from './SelectTripUser';
import CreateTrip from './CreateTrip';
import NearYou from './NearYou';
import TripDetails from './TripDetails';

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
                <Scene key="createTrip">
                    <Scene component={CreateTrip} title="Create Trip" />
                </Scene>
                <Scene key="nearYou">
                    <Scene component={NearYou} title="Near You" />
                </Scene>
                <Scene key="selectTripUser">
                    <Scene component={SelectTripUser} title="Select Trip User" />
                    <Scene key="tripDetails" component={TripDetails} title="Trip Details" />
                </Scene>
                
            </Scene>
        </Router>
    )
}

export default RouterArea;