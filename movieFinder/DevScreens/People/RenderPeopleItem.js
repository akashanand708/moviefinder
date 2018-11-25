import React from 'react'
import { InteractionManager, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SuperGridSectionList } from 'react-native-super-grid';
import * as fetchPeopleActions from '../../../App/Actions/fetchPeopleActions'
import Constants from '../../../App/Constants/Constants';
import { Metrics } from '../../../App/Themes';
import People from '../../CommonComponent/People/People';
import SuperGridSectionListCustom from '../../CommonComponent/SuperGridSectionListCustom';

class RenderPeopleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1
    }
  }
  componentDidMount() {
    let { peopleType } = this.props;
    InteractionManager.runAfterInteractions(() => {
      if (peopleType !== Constants.SEARCHED_PEOPLE) {
        this.fetchPeople();
      }
    })
  }

  componentWillUnmount() {
    //this.props.actions.resetPopularMoviesState();
  }
  fetchPeople = (refresh) => {
    let { pageNo } = this.state;
    let { peopleType, horizontal } = this.props;
    return this.props.actions.fetchPeople(pageNo, peopleType, horizontal, refresh);
  }
  fetchSearchResult = (refresh) => {
    let { pageNo } = this.state;
    let { queryString } = this.props;
    return this.props.actions.searchPeople(queryString, pageNo,refresh);
  }
  handleEnd = () => {
    let { peopleType, totalPages, horizontal, searchedTotalPages } = this.props;
    if (horizontal) {
      switch (peopleType) {
        case Constants.POPULAR_PEOPLE:
          totalPages = totalPages;
          break;
        default:
          break;
      }
    } else {
      if (peopleType === Constants.SEARCHED_PEOPLE) {
        totalPages = searchedTotalPages
      }
    }
    let nextPage = this.state.pageNo + 1;
    if (nextPage <= totalPages) {
      this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {
        if (peopleType !== Constants.SEARCHED_PEOPLE) {
          this.fetchPeople()
            .then(() => {
              this.onEndReachedCalledDuringMomentum = true;
            })
        } else {
          this.fetchSearchResult()
            .then(() => {
              this.onEndReachedCalledDuringMomentum = true;
            })
        }
      })
    }
  }
  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    return <People
      people={item}
      type="people"
      navigation={this.props.navigation}
    />
  }
  refreshList = () => {
    let { peopleType } = this.props;
    this.props.actions.resetPeopleState();
    InteractionManager.runAfterInteractions(() => {
      if (peopleType !== Constants.SEARCHED_PEOPLE) {
        this.props.actions.resetPeopleState();
        this.setState({ pageNo: 1 }, () => this.fetchPeople(Constants.REFRESH));
      } else {
        this.props.actions.resetSearchedPeople();
        this.setState({ pageNo: 1 }, () => this.fetchSearchResult(Constants.REFRESH));
      }
    })
  }
  render() {
    let { searchedPeopleFetching, searchedPeopleList, peopleList, peopleFetching, horizontal,
      peopleType } = this.props;
    let staticDimension = Metrics.screenWidth,
      gridHeight = { height: Metrics.screenHeight - 130 },
      spacing = 12;
    if (horizontal) {
      staticDimension = Metrics.screenWidth - 100,
        gridHeight = { height: 195 };
      spacing = 1;
    }
    if (horizontal) {
      switch (peopleType) {
        case Constants.POPULAR_PEOPLE:
          peopleList = peopleList;
          peopleFetching = peopleFetching;
          break;
        default:
          break;
      }
    } else {
      if (peopleType === Constants.SEARCHED_PEOPLE) {
        peopleList = searchedPeopleList;
        peopleFetching = searchedPeopleFetching;
      }
    }
    return (
      <View>
        {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
        <SuperGridSectionListCustom
          itemList={peopleList}
          gridHeight={gridHeight}
          spacing={spacing}
          horizontal={horizontal}
          staticDimension={staticDimension}
          handleEnd={this.handleEnd}
          renderItem={this.renderItem}
          refreshList={this.refreshList}
          navigation={this.props.navigation}
          moviesFetching={peopleFetching}
        />
      </View>

    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchPeopleActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {

    peopleList: state.data.people.peopleList,
    peopleFetching: state.data.people.peopleFetching,
    totalPages: state.data.people.totalPages,

    searchedPeopleList: state.data.searchedPeople.searchedPeopleList,
    searchedPeopleFetching: state.data.searchedPeople.peopleFetching,
    searchedTotalPages: state.data.searchedPeople.totalPages,
  };
};
export default connect(mapStateToProps, mapDispatch)(RenderPeopleItem);