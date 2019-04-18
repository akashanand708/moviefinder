import React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Colors } from '../../../DevScreens/DevTheme';
import style from './style';
import Poster from '../Poster';
import Utils from '../../../Utility/Utils';
import BackButton from '../../BackButton';

class MovieDetailHeader extends React.Component {

  openTrailer = () => {
    this.props.navigation.push("Trailers");
  }
  render() {
    let { movieDetail, headerHeight } = this.props;
    let votePercentage = movieDetail.vote_average;
    if (votePercentage !== undefined && votePercentage > 0) {
      votePercentage = votePercentage * 10;
    }

    let trailerVideoLength = 0;
    if (movieDetail.videos && movieDetail.videos.results.length > 0) {
      trailerVideoLength = movieDetail.videos.results.length;
    }
    let runtimeStr = Utils.getRuntime(movieDetail.runtime),
      voteAverage = movieDetail.vote_average ? movieDetail.vote_average + '/10' : '';
    return (

      <Animated.View style={[style.movieDetailHeader, headerHeight]}>
        <Poster
          posterUrl={movieDetail.backdrop_path}
          posterStyle={style.backDropImage}
          posterType="detail"
        />
        <View style={style.headerLower}>
          <Poster
            posterUrl={movieDetail.poster_path}
            posterStyle={style.posterImage}
            posterType="movie"
          />
          <View style={style.headerlowerRight}>
            <Text style={style.heading}>{movieDetail.title || movieDetail.original_name}</Text>
            {
              movieDetail.tagline !== '' && movieDetail.tagline !== null &&
              <Text style={[style.subHeading, style.taglineFontSize]}>{movieDetail.tagline}</Text>
            }

            {
              voteAverage !== '' &&
              <View style={style.alignRowLeft}>
                <View><Text style={style.subHeading}>{voteAverage}</Text></View>
                <View style={style.movieDbMain}><Text style={style.movieDb}>MovieDB</Text></View>
              </View>
            }
            {
              runtimeStr !== '  ' &&
              <View><Text style={[style.runtime]}> {runtimeStr}</Text></View>
            }
          </View>
        </View>
        <BackButton
          navigation={this.props.navigation}
          style={style.backArrow}
        />
        {
          trailerVideoLength > 0 &&
          <TouchableOpacity onPress={this.openTrailer} style={[style.commonBoxShadow, style.playButton]}>
            <Icon name="play-circle" size={40} style={{ color: Colors.playButton }} />
          </TouchableOpacity>
        }
      </Animated.View>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    movieDetail: state.data.movieDetail.movieDetail || {},
  };
};

export default connect(mapStateToProps, null)(MovieDetailHeader);