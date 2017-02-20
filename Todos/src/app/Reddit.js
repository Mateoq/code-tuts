import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

const Reddit = (props) => (
  <View>
    <Text>Reddit</Text>
    <View>
      {props.posts.map((post, key) => (
        <Text key={key}>{post.name}</Text>
      ))}
    </View>
  </View>
);

const mapStateToProps = state => ({
  posts: state.reddit
});

export default connect(
  mapStateToProps
)(Reddit);
