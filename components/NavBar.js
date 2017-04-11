import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

export default class NavBar extends Component {
  render() {
    return (
      <View style={ {backgroundColor: this.props.bg} }>
        <TouchableHighlight onPress={this.props.pressedButton}>
          <Text>{this.props.textButton}</Text>
        </TouchableHighlight>
        <Text>{this.props.titleNavbar}</Text>
      </View>
    );
  }
}
