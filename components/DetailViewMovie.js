import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class DetailViewMovie extends Component {
  _goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.containerDetail}>
        <TouchableHighlight onPress={() => this._goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
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
