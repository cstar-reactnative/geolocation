/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    lat:"",
    lng:"",
  }

  constructor(){
        super();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
        ToastAndroid.show("Start Location", ToastAndroid.SHORT);
       },
       (error) => {
        console.log(error)
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000}
    );
    var self = this;
    setInterval(()=>{
      navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        self.setState({
          lat:position.coords.latitude,
          lng:position.coords.longitude
        });
        ToastAndroid.show("Update Location", ToastAndroid.SHORT);
       },
       (error) => {
        console.log(error)
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000}
    );
    },20000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GeoLocation Test
        </Text>
        <Text style={styles.instructions}>
          {this.state.lat} , {this.state.lng}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
