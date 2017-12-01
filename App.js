import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItem from './ListItem';
import SearchInput from './SearchInput';
import Separator from './Separator';
import Loading from './Loading';
import Empty from './Empty';

import search from './api/search';
import token from './api/token';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      offset: 0,
      limit: 20,
      query: 'shpongle',
    };
  }
  async loadNextPage() {
    if (this.state.isFetching) {
      console.log('already fetching next page');
      return;
    }
    if (!this.state.token) {
      console.log('token is falsy');
      return;
    }
    this.setState({
      isFetching: true,
    });
    const newItems = await search({
      offset: this.state.offset,
      limit: this.state.limit,
      q: this.state.query,
      token: this.state.token,
    });
    this.setState({
      items: [...this.state.items, ...newItems],
      offset: this.state.offset + this.state.limit,
      isFetching: false,
    });
  }
  async componentDidMount() {
    const newToken = await token();

    this.setState({
      token: newToken,
    }, () => {
      this.loadNextPage();
    });
  }
  async handleEndReached() {
    console.log('on end reached');
    this.loadNextPage();
  }
  handleSearchTextChange(text) {
    this.setState({
      query: text,
      offset: 0,
      items: [],
    }, () => {
      this.loadNextPage();
    });
  }
  render() {
    const { items, isFetching } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello at Bene Studio's React Native Workshop!</Text>
        <Text style={styles.title}>It's a Spotify listing app</Text>
        <SearchInput onChangeText={(text) => this.handleSearchTextChange(text)} />
        {
          (items.length === 0 && isFetching)
            ? <Loading />
            : <FlatList
              data={items}
              renderItem={({ item }) => <ListItem item={item} onPress={() => {}} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
              onEndReached={() => this.handleEndReached()}
              ListEmptyComponent={Empty}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    padding: 10,
  }
});
