import React from 'react'
import { View } from 'react-native'
import styles from '../Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../../CommonComponent/MovieItem/RenderTrailer/RenderMovieItem';
import Constants from '../../../App/Constants/Constants';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';

class VerticalMovieList extends React.Component {

  goBack = () => {
    this.props.navigation.goBack();
    this.props.actions.backAction();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    let { movieType } = this.props.navigation.state.params;
    return (
      <View style={styles.mainContainer}>
        <SearchButton
          searchType={Constants.MOVIE}
          horizontal={false}
          navigation={this.props.navigation}
        />
        <View style={styles.verticalListContainer}>
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
