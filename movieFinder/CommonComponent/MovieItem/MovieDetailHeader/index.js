import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Colors } from '../../../DevScreens/DevTheme';
import { bindActionCreators } from 'redux'
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Constants from '../../../../App/Constants/Constants';
import { ROUTE_NAME } from '../../../../App/Constants/RouteNameConstant';
import Poster from '../Poster';
import Utils from '../../../Utility/Utils';
import BackButton from '../../BackButton';

class MovieDetailHeader extends React.Component {

  openTrailer = () => {
    this.props.navigation.navigate("Trailers");
  }
  render() {
    let { movieDetail, movieDetailFetching } = this.props;
    let releaseDate = new Date(movieDetail.release_date);
    let releaseYear = releaseDate.getFullYear();
    let votePercentage = movieDetail.vote_average;
    console.log("VOTE PERCENTAGE.....", votePercentage);
    if (votePercentage !== undefined && votePercentage > 0) {
      votePercentage = votePercentage * 10;
    }

    let trailerVideoLength = 0;
    if (movieDetail.videos && movieDetail.videos.results.length > 0) {
      trailerVideoLength = movieDetail.videos.results.length;
    }
    console.log("Movie details.....", movieDetail);
    // let genre = Utils.parseGenre(movieDetail.genres);
    let genre = "Action | Thriller | Adventure";
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
            <Text style={style.heading}>{movieDetail.title}</Text>
            <Text style={style.subHeading}>{movieDetail.tagline}</Text>
            <Text style={style.subHeading}>{genre}</Text>
            <View style={[style.subHeading, style.releaseCountryTime]}>
              <Text>{"July 22, 2008"}</Text>
              <Text>{"USA"}</Text>
              <Text>{movieDetail.runtime}</Text>
            </View>
            <View style={style.subHeading}><Text>{"7.2/10"}</Text></View>
            <Text style={style.subHeading}>{movieDetail.homepage}</Text>
          </View>
        </View>
        <BackButton
          goBack={this.props.goBack}
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
    movieDetail: state.data.movieDetail.movieDetail,
  };
};

export default connect(mapStateToProps, null)(MovieDetailHeader);