import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

export default class EventList extends Component {
  state = {
    libros: []
  }

  componentDidMount() {
    const libros = require('./db.json').libros
    this.setState( { libros })
  }

  render() {
    return(
      <FlatList
        data={ this.state.libros }
        style={ styles.list }
        renderItem={ ({ item }) => 
          <View style={styles.container}>
            <Text>{ item.nombre }</Text>
          </View>
        }
        keyExtractor={ item => item.id }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    fontSize: 32,
  },
  list: {
    flex: 1,
    backgroundColor: '#ccddff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

