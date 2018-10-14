import React from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Item, Input, Text } from 'native-base';
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from './style';
import Colors from '../../DevScreens/DevTheme/Colors';
import BackButton from '../BackButton';
import RenderMovieItem from '../MovieItem/RenderTrailer/RenderMovieItem';
import Constants from '../../../App/Constants/Constants';
import SearchInput from './SearchInput';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryString: ''
    }
  }

  fetchSearchResult = () => {
    let queryString = this.refs.searchInput.refs.searchInputBox._root._lastNativeText,
      pageNo = 1;
    let { searchType } = this.props.navigation.state.params;
    this.setState({ queryString }, () => {

      switch (searchType) {
        case Constants.PEOPLE:
          this.props.actions.resetSearchedPeople();
          this.props.actions.searchPeople(queryString, pageNo);
          break;
        case Constants.TVSHOWS:
          this.props.actions.resetSearchedTvshows();
          this.props.actions.searchTvshows(queryString, pageNo);
          break;
        default:
          this.props.actions.resetSearchedMovies();
          this.props.actions.searchMovies(queryString, pageNo);
          break;
      }
    })
  }
  static navigationOptions = ({ navigation }) => {
    return {
      //header: null
    };
  };

  goBack = () => {
    this.props.navigation.goBack();
    this.props.actions.backAction();
  }

  renderMovies = () => {
    let { fetching, totalResults, peopleFetching, peopleTotalResults, tvshowsFetching, tvshowsTotalResults } = this.props;
    let { searchType } = this.props.navigation.state.params;

    switch (searchType) {
      case Constants.PEOPLE:
        fetching = peopleFetching;
        totalResults = peopleTotalResults;
        break;
      case Constants.TVSHOWS:
        fetching = tvshowsFetching;
        totalResults = tvshowsTotalResults;
        break;
      default:
        break;
    }
    let { queryString } = this.state;
    if (!fetching && totalResults === 0) {
      return <Text>No result found...</Text>
    } else {
      switch (searchType) {
        case Constants.PEOPLE:
          return <Text>Render people.</Text>
        case Constants.TVSHOWS:
          return <Text>Render tv shows</Text>
        default:
          return <RenderMovieItem
            movieType={Constants.SEARCHED_MOVIES}
            navigation={this.props.navigation}
            horizontal={false}
            queryString={queryString}
          />
      }
    }
  }
  render() {
    let { searchType } = this.props.navigation.state.params;

    return (
      <View>
        <SearchInput
          ref={"searchInput"}
          fetchSearchResult={this.fetchSearchResult}
          searchType={searchType}
        />
        <View style={style.movieListContainer}>
          {
            this.renderMovies()
          }
        </View>
      </View>
    );
  }
}
SearchComponent.defaultProps = {

}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};


const mapStateToProps = (state) => {
  return {
    fetching: state.data.searchedMovies.moviesFetching,
    totalResults: state.data.searchedMovies.totalResults,
    peopleFetching: state.data.searchedPeople.peopleFetching,
    peopleTotalResults: state.data.searchedPeople.totalResults,
    tvshowsFetching: state.data.searchedTvshows.tvshowsFetching,
    tvshowsTotalResults: state.data.searchedTvshows.totalResults,
  };
};
export default connect(mapStateToProps, mapDispatch)(SearchComponent);