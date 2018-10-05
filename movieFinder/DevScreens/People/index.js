import React from 'react';
import { Text, View } from 'react-native';

class People extends React.Component {
  render() {
    console.log("POEPLE RENDER......");
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>People</Text>
      </View>
    );
  }
}

export default People;