import React from 'react';
import { Text, View } from 'react-native';

class TvShows extends React.Component {
  render() {
    console.log("TV SHOW RENDER......");
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TvShows</Text>
      </View>
    );
  }
}

export default TvShows;