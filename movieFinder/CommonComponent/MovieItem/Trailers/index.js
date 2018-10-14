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