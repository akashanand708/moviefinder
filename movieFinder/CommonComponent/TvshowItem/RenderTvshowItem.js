import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SuperGridSectionList } from 'react-native-super-grid';
import * as fetchTvActions from '../../../App/Actions/fetchTvActions'
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';
import style from './TvshowItemStyle';
import SuperGridSectionListCustom from '../SuperGridSectionListCustom';
import Constants from '../../../App/Constants/Constants';
import TvshowItem from './TvshowItem';

class RenderTvshowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        }
    }
    componentDidMount() {
        let { tvshowType } = this.props;
        if (tvshowType !== Constants.SEARCHED_TVSHOWS) {
            this.fetchTvshows();
        }
    }

    componentWillUnmount() {
        this.props.actions.resetPopularTvshowsState();
    }
    fetchTvshows = () => {
        let { pageNo } = this.state;
        let { tvshowType, horizontal } = this.props;
        return this.props.actions.fetchTvshows(pageNo, tvshowType, horizontal);
    }
    fetchSearchResult = () => {
        let { pageNo } = this.state;
        let { queryString } = this.props;
        console.log("Render Item query string....", queryString);
        return this.props.actions.searchTvshows(queryString, pageNo);
    }
    handleEnd = () => {
        let { tvshowType,
            totalPages, totalOnairPages,
            totalPopularPages, totalTopRatedPages,
            totalArivingPages, horizontal, searchedTotalPages } = this.props;
        if (horizontal) {
            switch (tvshowType) {
                case Constants.TV_ARIVING_TVSHOWS:
                    totalPages = totalArivingPages;
                    break;
                case Constants.POPULAR_TVSHOWS:
                    totalPages = totalPopularPages;
                    break;
                case Constants.TOP_RATED_TVSHOWS:
                    totalPages = totalTopRatedPages;
                    break;
                case Constants.TV_ONAIR_TVSHOWS:
                    totalPages = totalOnairPages;
                    break;
                default:
                    break;
            }
        } else {
            if (tvshowType === Constants.SEARCHED_TVSHOWS) {
                totalPages = searchedTotalPages
            }
        }
        let nextPage = this.state.pageNo + 1;
        if (nextPage <= totalPages) {
            this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {

                if (tvshowType !== Constants.SEARCHED_TVSHOWS) {
                    this.fetchTvshows()
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
        console.log("Render Movie Items......");
        return <TvshowItem
            tvshowItem={item}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { horizontal,
            popularTvshowsList, tvArivingTvshowsList, tvshowsList, searchedTvshowsList,
            topRatedTvshowsList, tvOnAirTvshowsList,
            arivingTvshowsFetching, popularTvshowsFetching, tvshowsFetching,
            topRatedTvshowsFetching, onairTvshowsFetching, searchedTvshowsFetching,
            tvshowType } = this.props;
        let staticDimension = 0,
            gridHeight = {},
            spacing = 18;
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 195 };
            spacing = 1;
        }
        if (horizontal) {
            switch (tvshowType) {
                case Constants.TV_ARIVING_TVSHOWS:
                    tvshowsList = tvArivingTvshowsList;
                    tvshowsFetching = arivingTvshowsFetching;
                    break;
                case Constants.POPULAR_TVSHOWS:
                    tvshowsList = popularTvshowsList;
                    tvshowsFetching = popularTvshowsFetching;
                    break;
                case Constants.TOP_RATED_TVSHOWS:
                    tvshowsList = topRatedTvshowsList;
                    tvshowsFetching = topRatedTvshowsFetching;
                    break;
                case Constants.TV_ONAIR_TVSHOWS:
                    tvshowsList = tvOnAirTvshowsList;
                    tvshowsFetching = onairTvshowsFetching
                    break;
                default:
                    break;
            }
        } else {
            if (tvshowType === Constants.SEARCHED_TVSHOWS) {
                tvshowsList = searchedTvshowsList;
                tvshowsFetching = searchedTvshowsFetching;
            }
        }
        console.log("Render Items......");
        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                <SuperGridSectionListCustom
                    itemList={tvshowsList}
                    gridHeight={gridHeight}
                    spacing={spacing}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    handleEnd={this.handleEnd}
                    renderItem={this.renderItem}
                    navigation={this.props.navigation}
                    tvshowsFetching={tvshowsFetching}
                />
            </View>

        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchTvActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        popularTvshowsList: state.data.popularTvshows.popularTvshowsList,
        tvArivingTvshowsList: state.data.tvArivingTvshows.tvArivingTvshowsList,
        topRatedTvshowsList: state.data.topRatedTvshows.topRatedTvshowsList,
        tvOnAirTvshowsList: state.data.tvOnAirTvshows.tvOnAirTvshowsList,

        totalPopularPages: state.data.popularTvshows.totalPages,
        totalArivingPages: state.data.tvArivingTvshows.totalPages,
        totalTopRatedPages: state.data.topRatedTvshows.totalPages,
        totalOnairPages: state.data.tvOnAirTvshows.totalPages,

        popularTvshowsFetching: state.data.popularTvshows.tvshowsFetching,
        arivingTvshowsFetching: state.data.tvArivingTvshows.tvshowsFetching,
        topRatedTvshowsFetching: state.data.topRatedTvshows.tvshowsFetching,
        onairTvshowsFetching: state.data.tvOnAirTvshows.tvshowsFetching,

        tvshowsList: state.data.tvShows.tvshowsList,
        tvshowsFetching: state.data.tvShows.tvshowsFetching,
        totalPages: state.data.tvShows.totalPages,

        searchedTvshowsList: state.data.searchedTvshows.searchedTvshowsList,
        searchedTvshowsFetching: state.data.searchedTvshows.tvshowsFetching,
        searchedTotalPages: state.data.searchedTvshows.totalPages,
    };
};
export default connect(mapStateToProps, mapDispatch)(RenderTvshowItem);