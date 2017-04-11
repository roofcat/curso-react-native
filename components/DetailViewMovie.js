import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import NavBar from './NavBar'

export default class DetailViewMovie extends Component {
  _goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={[styles.containerDetails, border('red')]}>
        <NavBar
        pressedButton={() => this._goBack()}
        textButton="Back"
        />
        <View style={[styles.containerChildOne, border('blue')]}>
          <Text>{this.props.data}</Text>
        </View>
        <View style={[styles.containerChildTwo, border('green')]}>
          <Text>{this.props.data}</Text>
        </View>
      </View>
    );
  }
}

const border = (color) => {
  return {
    borderColor: color,
    borderWidth: 7,
  }
}

const styles = StyleSheet.create({
  containerDetails: {
    paddingTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildOne: {
    flex: 1,
  },
  containerChildTwo: {
    flex: 2,
  },
});
