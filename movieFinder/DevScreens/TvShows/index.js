import React from 'react';
import { View, ScrollView } from 'react-native';
import style from './style'
import LinearGradient from 'react-native-linear-gradient';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';
import Constants from '../../../App/Constants/Constants';
import HorizontalTvshowList from './HorizontalTvshowList';

class TvShows extends React.Component {
  navigate = (tvshowType, title) => {
    // this.props.navigation.navigate('NetworkError');
    let { connectionType } = this.props;
    if (['none', 'unknown'].includes(connectionType)) {
        this.props.navigation.navigate('NetworkError');
    } else {
        this.props.navigation.navigate({
            key: tvshowType,
            routeName: 'VerticalTvshowList',
            params: { tvshowType: tvshowType, title: title }
        })

    }
}
  render() {
    console.log("TV SHOW RENDER......");
    return (
      <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
      <SearchButton
          searchType={Constants.TVSHOWS}
          navigation={this.props.navigation}
      />
      <ScrollView>
          <View style={style.container}>
              <HorizontalTvshowList title={Constants.TVSHOW_TITLE.POPULAR} tvshowType={Constants.POPULAR_TVSHOWS} navigation={this.props.navigation} navigate={this.navigate} />
              <HorizontalTvshowList title={Constants.TVSHOW_TITLE.TOP_RATED} tvshowType={Constants.TOP_RATED_TVSHOWS} navigation={this.props.navigation} navigate={this.navigate} />
              <HorizontalTvshowList title={Constants.TVSHOW_TITLE.ON_AIR} tvshowType={Constants.TV_ONAIR_TVSHOWS} navigation={this.props.navigation} navigate={this.navigate} />
              <HorizontalTvshowList title={Constants.TVSHOW_TITLE.AIRING} tvshowType={Constants.TV_ARIVING_TVSHOWS} navigation={this.props.navigation} navigate={this.navigate} />
          </View>
      </ScrollView>
  </LinearGradient>
    );
  }
}

export default TvShows;