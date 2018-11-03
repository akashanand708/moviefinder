import React from 'react';
import { View, ScrollView } from 'react-native';
import style from './style'
import LinearGradient from 'react-native-linear-gradient';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';
import Constants from '../../../App/Constants/Constants';
import HorizontalTvshowList from './HorizontalTvshowList';

const TvShows = (props) => {
    navigate = (tvshowType, title) => {
        // props.navigation.navigate('NetworkError');
        let { connectionType } = props;
        if (['none', 'unknown'].includes(connectionType)) {
            props.navigation.navigate('NetworkError');
        } else {
            props.navigation.navigate({
                key: tvshowType,
                routeName: 'VerticalTvshowList',
                params: { tvshowType: tvshowType, title: title }
            })

        }
    }
    return (
        <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
            <SearchButton
                searchType={Constants.TVSHOWS}
                navigation={props.navigation}
                horizontal={true}
            />
            <ScrollView style={style.listScroll}>
                <View style={style.container}>
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.POPULAR} tvshowType={Constants.POPULAR_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.TOP_RATED} tvshowType={Constants.TOP_RATED_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.ON_AIR} tvshowType={Constants.TV_ONAIR_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.AIRING} tvshowType={Constants.TV_ARIVING_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default TvShows;