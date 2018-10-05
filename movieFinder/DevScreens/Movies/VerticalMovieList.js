// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Images } from '../DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../../CommonComponent/MovieItem/RenderMovieItem';
import Constants from '../../../App/Constants/Constants';
import { Colors } from '../DevTheme';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'

class VerticalMovieList extends React.Component {

  goBack = () => {
    this.props.navigation.goBack();
    this.props.actions.backAction();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };
  render() {
    let { movieType } = this.props.navigation.state.params;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.movieListContainer}>
          <RenderMovieItem
            movieType={movieType}
            navigation={this.props.navigation}
            horizontal={false}
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

export default connect(null, mapDispatch)(VerticalMovieList);
