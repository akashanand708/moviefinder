// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, FlatList, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridView from 'react-native-super-grid'
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'
import MovieItem from '../CommonComponent/MovieItem';


class PopularMovies extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPopularMovies();
  }

  renderMovieItem = () => {
    let { popularMoviesList } = this.props;
    return (
      <GridView
        itemDimension={150}
        items={popularMoviesList}
        spacing= {2}
        renderItem={item => (
          <MovieItem
            movieItem={item}
          //navigation={navigation}
          />
        )}
      />
    )
  }
  render() {
    let { popularMoviesList } = this.props;
    console.log('Popularmovie list....', popularMoviesList);
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={{paddingTop: 72}}>
          <View>
            {this.renderMovieItem()}
          </View>
        </ScrollView>
      </View >
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    popularMoviesList: state.data.popularMovies.popularMoviesList
  };
};

export default connect(mapStateToProps, mapDispatch)(PopularMovies);
