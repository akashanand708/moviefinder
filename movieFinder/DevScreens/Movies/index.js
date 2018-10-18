import React from 'react';
import { View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import HorizontalMovieList from './HorizontalMovieList';
import Constants from '../../../App/Constants/Constants';
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
                    searchType={Constants.MOVIE}
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