import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import style from './style';
import RenderTrailerItem from '../RenderTrailer/RenderTrailerItem';

class Trailers extends React.Component {

  render() {
    let { movieDetail } = this.props;

    return (
      <View style={[style.mainContainer, style.trailerHeader]}>
        <RenderTrailerItem
          trailerList={(movieDetail.videos && movieDetail.videos.results) || []}
          navigation={this.props.navigation}
        />
      </View>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    movieDetail: state.data.movieDetail.movieDetail,
  };
};

export default connect(mapStateToProps, null)(Trailers);