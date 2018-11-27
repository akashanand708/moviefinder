import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import style from './style'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchTvActions from '../../../App/Actions/fetchTvActions'
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';
import Constants from '../../../App/Constants/Constants';
import HorizontalTvshowList from './HorizontalTvshowList';

const TvShows = (props) => {
    let refreshing = false;
    let apiCounter = 0;
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

    _onRefresh = () => {
        refreshing = true;
        props.actions.fetchTvshows(1, Constants.POPULAR_TVSHOWS, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchTvshows(1, Constants.TOP_RATED_TVSHOWS, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchTvshows(1, Constants.TV_ONAIR_TVSHOWS, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchTvshows(1, Constants.TV_ARIVING_TVSHOWS, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
    }

    isApiCounterFour = () => {
        if (apiCounter === 4) {
            refreshing = false
        }
    }
    return (
        <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
            <SearchButton
                searchType={Constants.TVSHOWS}
                navigation={props.navigation}
                horizontal={true}
            />
            <ScrollView
                style={style.listScroll}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <View style={style.container}>
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.AIRING} tvshowType={Constants.TV_ARIVING_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.ON_AIR} tvshowType={Constants.TV_ONAIR_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.POPULAR} tvshowType={Constants.POPULAR_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalTvshowList title={Constants.TVSHOW_TITLE.TOP_RATED} tvshowType={Constants.TOP_RATED_TVSHOWS} navigation={props.navigation} navigate={this.navigate} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchTvActions, dispatch),
    };
};

export default connect(null, mapDispatch)(TvShows);