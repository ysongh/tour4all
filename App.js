import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Router from './src/components/Router';
import TripDetails from './src/components/TripDetails';
import Itenerary from './src/components/Itenerary';
import Memories from './src/components/Memories';
import Profile from './src/components/Profile';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Profile />
        {/* <Router /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
