import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  AlertIOS,
  NavigatorIOS,
  Navigator,
} from 'react-native';

import ListViewMovie from './components/ListViewMovie'
import DetailViewMovie from './components/DetailViewMovie'

export default class ReactApp extends Component {
  _renderScene(route, navigator) {
    var globalProps = {navigator}

    switch (route.ident) {
      case 'ListViewMovie':
        return (
          <ListViewMovie
            {...globalProps}
          />
        )
      case 'DetailViewMovie':
      return (
        <DetailViewMovie
          {...globalProps}
          data={route.dataRow}
        />
      )
    }
  }

  _configureScene(route, routeStack)  {
    switch (route.ident) {
      case 'ListViewMovie':
        return Navigator.SceneConfigs.FloatFromBottom
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{ident: 'ListViewMovie'}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
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
  cell: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);
