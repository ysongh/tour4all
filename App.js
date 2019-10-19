import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Router from './src/components/Router';
import TripDetails from './src/components/TripDetails';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TripDetails />
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
