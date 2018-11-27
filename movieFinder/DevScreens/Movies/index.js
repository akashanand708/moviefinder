import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import style from './style';
import HorizontalMovieList from './HorizontalMovieList';
import Constants from '../../../App/Constants/Constants';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';

const Movies = (props) => {
    let refreshing = false;
    let apiCounter = 0;
    navigate = (movieType, title) => {
        // props.navigation.navigate('NetworkError');
        let { connectionType } = props;
        if (['none', 'unknown'].includes(connectionType)) {
            props.navigation.navigate('NetworkError');
        } else {
            props.navigation.navigate({
                key: movieType,
                routeName: 'VerticalMovieList',
                params: { movieType: movieType, title: title }
            })

        }
    }
    _onRefresh = () => {
        let { countryCode } = props;
        refreshing = true;
        props.actions.fetchMovies(1, Constants.POPULAR_MOVIES, countryCode, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchMovies(1, Constants.NOW_PLAYING_MOVIES, countryCode, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchMovies(1, Constants.TOP_RATED_MOVIES, countryCode, Constants.REFRESH)
            .then(() => {
                apiCounter++;
                isApiCounterFour();
            });
        props.actions.fetchMovies(1, Constants.UPCOMING_MOVIES, countryCode, Constants.REFRESH)
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
        <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={[style.linearGradient]}>
            <SearchButton
                searchType={Constants.MOVIE}
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
                    <HorizontalMovieList title={Constants.TITLE.UPCOMING} movieType={Constants.UPCOMING_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.NOWPLAYING} movieType={Constants.NOW_PLAYING_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.POPULAR} movieType={Constants.POPULAR_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.TOP_RATED} movieType={Constants.TOP_RATED_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        countryCode: state.ui.filterCountry.selected_country
    }
}
export default connect(mapStateToProps, mapDispatch)(Movies);