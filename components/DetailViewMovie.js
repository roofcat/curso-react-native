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
      <View style={styles.containerDetail}>
        <NavBar
          pressedButton={() => this._goBack()}
          textButton="Back"
        />
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDetail: {
    paddingTop: 80
  }
});
