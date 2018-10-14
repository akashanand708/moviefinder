import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import style from './style'
import SearchComponent from '../../CommonComponent/SearchComponent';
import LinearGradient from 'react-native-linear-gradient';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';

class TvShows extends React.Component {
  render() {
    console.log("TV SHOW RENDER......");
    return (
      <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
        <SearchButton
          searchType="TvShows"
          navigation={this.props.navigation}
        />

        <ScrollView>
          <View style={style.container}>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default TvShows;