// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../CommonComponent/MovieItem/RenderMovieItem';
import Constants from '../../App/Constants/Constants';

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
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

export default PopularMovies;
