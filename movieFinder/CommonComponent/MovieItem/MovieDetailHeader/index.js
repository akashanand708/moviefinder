import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { Label } from 'native-base';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Colors } from '../../../DevScreens/DevTheme';
import style from './style';
import Poster from '../Poster';
import Utils from '../../../Utility/Utils';
import BackButton from '../../BackButton';

class MovieDetailHeader extends React.Component {

  openTrailer = () => {
    this.props.navigation.navigate("Trailers");
  }
  render() {
    let { movieDetail, movieDetailFetching, movieOrTvshow } = this.props;
    let releaseDate = new Date(movieDetail.release_date);
    let releaseYear = releaseDate.getFullYear();
    let votePercentage = movieDetail.vote_average;
    if (votePercentage !== undefined && votePercentage > 0) {
      votePercentage = votePercentage * 10;
    }

    let trailerVideoLength = 0;
    if (movieDetail.videos && movieDetail.videos.results.length > 0) {
      trailerVideoLength = movieDetail.videos.results.length;
    }
    let genre = Utils.ConcatArrayString(movieDetail.genres),
      dateString = Utils.convertDate(movieDetail.release_date || movieDetail.first_air_date),
      country = Utils.getProductionCountryString(movieDetail.production_countries || movieDetail.origin_country),
      runtimeStr = Utils.getRuntime(movieDetail.runtime),
      voteAverage = movieDetail.vote_average ? movieDetail.vote_average + '/10' : '';
    return (

      <View style={[style.mainContainer, style.movieDetailHeader]}>
        <Poster
          posterUrl={movieDetail.backdrop_path}
          posterStyle={style.backDropImage}
          posterType="detail"
        />
        <View style={style.headerLower}>
          <Poster
            posterUrl={movieDetail.poster_path}
            posterStyle={style.posterImage}
          />
          <View style={style.headerlowerRight}>
            <Text style={style.heading}>{movieDetail.title || movieDetail.original_name}</Text>
            {
              movieDetail.tagline !== '' &&
              <Text style={[style.subHeading, style.taglineFontSize]}>{movieDetail.tagline}</Text>
            }
            {
              genre !== '' &&
              <Text style={style.subHeading}>{genre}</Text>
            }

            <Text style={[style.subHeading, style.releaseCountryTime]}>
              {dateString}({country})
                {
                runtimeStr !== '  ' &&
                <Text style={[style.runtime]}> {runtimeStr}</Text>
              }
            </Text>

            {
              voteAverage !== '' &&
              <View style={style.alignRowLeft}>
                <View><Text style={style.subHeading}>{voteAverage}</Text></View>
                <View style={style.movieDbMain}><Text style={style.movieDb}>MovieDB</Text></View>
              </View>
            }
            <Text style={[style.subHeading, style.underLine]} onPress={() => Linking.openURL(movieDetail.homepage)} >{movieDetail.homepage}</Text>
          </View>
        </View>
        <BackButton
          navigation={this.props.navigation}
          style={style.backArrow}
        />
        <TouchableOpacity onPress={this.openTrailer} style={[style.commonBoxShadow, style.playButton]}>
          <Icon name="play-circle" size={40} style={{ color: Colors.playButton }} />
        </TouchableOpacity>
      </View>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    movieDetail: state.data.movieDetail.movieDetail || {},
  };
};

export default connect(mapStateToProps, null)(MovieDetailHeader);