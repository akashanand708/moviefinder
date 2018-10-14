import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigator } from 'react-navigation'
import style from './style';
import VerticalMovieList from './VerticalMovieList';
import HorizontalMovieList from './HorizontalMovieList';
import Constants from '../../../App/Constants/Constants';
import { ROUTE_NAME } from '../../../App/Constants/RouteNameConstant';
import NetworkError from '../NetworkError';
import YoutubeVideo from '../../CommonComponent/MovieItem/RenderTrailer/YoutubeVideo';
import { Colors } from '../DevTheme';
import SearchComponent from '../../CommonComponent/SearchComponent';
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';

class Movies extends React.Component {
    navigate = (movieType, title) => {
        // this.props.navigation.navigate('NetworkError');
        let { connectionType } = this.props;
        if (['none', 'unknown'].includes(connectionType)) {
            this.props.navigation.navigate('NetworkError');
        } else {
            this.props.navigation.navigate({
                key: movieType,
                routeName: 'VerticalMovieList',
                params: { movieType: movieType, title: title }
            })

        }
    }


    render() {
        console.log("MOVIE RENDER......");
        return (
            <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
                <SearchButton
                    searchType="Movie"
                    navigation={this.props.navigation}
                />
                <ScrollView>
                    <View style={style.container}>
                        <HorizontalMovieList title={Constants.TITLE.POPULAR} movieType={Constants.POPULAR_MOVIES} navigation={this.props.navigation} navigate={this.navigate} />
                        <HorizontalMovieList title={Constants.TITLE.NOWPLAYING} movieType={Constants.NOW_PLAYING_MOVIES} navigation={this.props.navigation} navigate={this.navigate} />
                        <HorizontalMovieList title={Constants.TITLE.TOP_RATED} movieType={Constants.TOP_RATED_MOVIES} navigation={this.props.navigation} navigate={this.navigate} />
                        <HorizontalMovieList title={Constants.TITLE.UPCOMING} movieType={Constants.UPCOMING_MOVIES} navigation={this.props.navigation} navigate={this.navigate} />
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}
export default Movies;