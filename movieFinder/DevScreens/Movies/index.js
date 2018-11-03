import React from 'react';
import { View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import HorizontalMovieList from './HorizontalMovieList';
import Constants from '../../../App/Constants/Constants';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';

const Movies = (props) => {
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

    return (
        <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={[style.linearGradient]}>
            <SearchButton
                searchType={Constants.MOVIE}
                navigation={props.navigation}
                horizontal={true}
            />
            <ScrollView style={style.listScroll}>
                <View style={style.container}>
                    <HorizontalMovieList title={Constants.TITLE.POPULAR} movieType={Constants.POPULAR_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.NOWPLAYING} movieType={Constants.NOW_PLAYING_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.TOP_RATED} movieType={Constants.TOP_RATED_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                    <HorizontalMovieList title={Constants.TITLE.UPCOMING} movieType={Constants.UPCOMING_MOVIES} navigation={props.navigation} navigate={this.navigate} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}
export default Movies;