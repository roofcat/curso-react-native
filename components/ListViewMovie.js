import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import DetailViewMovie from './DetailViewMovie'
import NavBar from './NavBar'

export default class ListViewMovie extends Component {
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
        <View style={styles.navigationBar}>
          <Text style={styles.navigatorButton}>
            Add
          </Text>
          <Text style={styles.navigatorTitle}>
            List of Movies
          </Text>
          <Text style={styles.navigatorButton}>
            Like
          </Text>
        </View>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  pressCell(dataRow) {
    this.props.navigator.push({
      ident: 'DetailViewMovie',
      dataRow
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  navigatorButton: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  navigatorTitle: {
    flex: 3,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  cell: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  }
});
