// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, FlatList, ScrollView, Text, Image, NetInfo, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridView from 'react-native-super-grid'
import { Spinner } from 'native-base';
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'
import MovieItem from '../CommonComponent/MovieItem/MovieItem';
import CommonLoader from '../CommonComponent/CommonLoader/CommonLoader';

const initialPageNo = 1;
class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1
    }
  }
  componentDidMount() {
    this.fetchPopularMovies();
  }

  componentWillUnmount() {
    console.log("UNMOUNT.......");
    this.props.actions.resetPopularMoviesState();
  }
  fetchPopularMovies = () => {
    let { pageNo } = this.state;
    return this.props.actions.fetchPopularMovies(pageNo);
  }
  handleEnd = () => {
    console.log('End raeched...');
    // if (!this.onEndReachedCalledDuringMomentum) {
    let { totalPages } = this.props;
    let nextPage = this.state.pageNo + 1;
    if (nextPage <= totalPages) {
      this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {
        this.fetchPopularMovies()
          .then(() => {
            this.onEndReachedCalledDuringMomentum = true;
          })
      })
    }
    // }
  }
  _keyExtractor = (item, index) => item.id;
  renderMovieItem = () => {
    let { popularMoviesList, popularMoviesFetching } = this.props;
    return (
      <GridView
        itemDimension={150}
        items={popularMoviesList}
        spacing={2}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={() => { return <ActivityIndicator animating={popularMoviesFetching} size="large" /> }}
        initialNumToRender={1}
        // handleEndReached={() => this.handleEnd()}
        // handleEndReachedThreshold={0}
        onEndReached={() => this.handleEnd()}
        onEndReachedThreshold={0.8}
        //shouldItemUpdate={this._shouldItemUpdate}
        renderItem={item => (
          <MovieItem
            movieItem={item}
          //navigation={navigation}
          />
        )}
      />
    )
  }

  _shouldItemUpdate = (prev, next) => {
    return prev.item !== next.item;
  }
  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  render() {
    let { popularMoviesList, popularMoviesFetching } = this.props;
    console.log('Popularmovie list....', popularMoviesList);
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
        {/* <ScrollView
          // onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          // onMomentumScrollEnd={() => this.handleEnd()}
          onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent)) {
              this.handleEnd();
            }
          }}
          scrollEventThrottle={400}
        > */}
        <View>
          {this.renderMovieItem()}
        </View>
        {/* </ScrollView> */}
        {/* {
          popularMoviesFetching &&
          <CommonLoader />
        } */}
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
    popularMoviesList: state.data.popularMovies.popularMoviesList,
    popularMoviesFetching: state.data.popularMovies.popularMoviesFetching,
    totalPages: state.data.popularMovies.totalPages
  };
};

export default connect(mapStateToProps, mapDispatch)(PopularMovies);
