import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data.data.children });
    });
  }

  render() {
    return (
      <View>
        <Text>Reddit</Text>
        <View>
          {this.state.posts.map((post, key) => (
            <Text key={key}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    );
  }
}

export default Reddit;
