// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../CommonComponent/MovieItem/RenderMovieItem';
import Constants from '../../App/Constants/Constants';
import { Colors } from '../../App/Themes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'

class PopularMovies extends React.Component {
  goBack = () => {
    this.props.navigation.goBack();
    this.props.actions.backAction();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.goBack} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Icon name="arrow-circle-left" size={30} style={{ color: Colors.backArrow }} />
        </TouchableOpacity>
        <View style={styles.movieListContainer}>
          <RenderMovieItem
            movieType={Constants.POPULAR_MOVIES}
            navigation={this.props.navigation}
          />
        </View>
      </View >
    )
  }
}


const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

export default connect(null, mapDispatch)(PopularMovies);
