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
} from 'react-native';

export default class ReactApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ListViewMovie,
          title: 'Lista de Peliculas'
        }}
        style={{flex: 1}}
      />
    );
  }
}

export class ListViewMovie extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    var titles = [];
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        var movies = responseJson.movies;
        for (var i = 0; i < movies.length; i++) {
          titles.push(movies[i].title);
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(titles)
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  pressCell(dataRow) {
    this.props.navigator.push({
      component: DetailViewMovie,
      passProps: {dataRow},
      title: 'Detalles de la película'
    })
  }

  renderRow(dataRow) {
    return (
      <TouchableHighlight onPress={() => {this.pressCell(dataRow)}}>
        <View style={styles.cell}>
          <Text>{dataRow}</Text>
        </View>
      </TouchableHighlight>
    );
  }

}

export class DetailViewMovie extends Component {
  render() {
    return (
      <View style={styles.containerDetail}>
        <Text>{this.props.dataRow}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerDetail: {
    paddingTop: 80
  },
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
