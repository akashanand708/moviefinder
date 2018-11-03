// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Images } from '../DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../../CommonComponent/MovieItem/RenderTrailer/RenderMovieItem';
import Constants from '../../../App/Constants/Constants';
import { Colors } from '../DevTheme';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'

const HorizontalMovieList = (props) => {

  let { movieType, title } = props;
  return (
    <View style={styles.mainHorizontalContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={() => props.navigate(movieType, title)}><Text style={styles.headerText} >See all</Text></TouchableOpacity>
      </View>
      <View style={styles.movieListContainer}>
        <RenderMovieItem
          movieType={movieType}
          navigation={props.navigation}
          horizontal={true}
        />
      </View>
    </View >
  )
}


const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

export default connect(null, mapDispatch)(HorizontalMovieList);
