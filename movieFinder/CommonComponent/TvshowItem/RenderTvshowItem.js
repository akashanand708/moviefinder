import React from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchTvActions from '../../../App/Actions/fetchTvActions'
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';
import { Metrics } from '../../../App/Themes';
import SuperGridSectionListCustom from '../SuperGridSectionListCustom';
import Constants from '../../../App/Constants/Constants';
import TvshowItem from './TvshowItem';

class RenderTvshowItem extends React.Component {
    componentDidMount() {
        let { tvshowType, horizontal } = this.props;
        InteractionManager.runAfterInteractions(() => {
            if (tvshowType !== Constants.SEARCHED_TVSHOWS && horizontal) {
                this.fetchTvshowsCommon("")
            }
        })
    }

    componentWillUnmount() {
        // this.props.actions.resetPopularTvshowsState();
    }
    fetchTvshows = (pageNo, refresh) => {
        let { tvshowType } = this.props;
        return this.props.actions.fetchTvshows(pageNo, tvshowType, refresh);
    }
    fetchTvshowsCommon = (refresh) => {
        let { pageNo } = 1;
        let { tvshowType,
            pageNoPopularPages, pageNoArivingPages, pageNoTopRatedPages,
            pageNoOnairPages } = this.props;


        switch (tvshowType) {
            case Constants.TV_ARIVING_TVSHOWS:
                pageNo = pageNoArivingPages
                break;
            case Constants.POPULAR_TVSHOWS:
                pageNo = pageNoPopularPages;
                break;
            case Constants.TOP_RATED_TVSHOWS:
                pageNo = pageNoTopRatedPages;
                break;
            case Constants.TV_ONAIR_TVSHOWS:
                pageNo = pageNoOnairPages;
                break;
            default:
                break;
        }
        this.fetchTvshows(pageNo, refresh);
    }
    fetchSearchResult = (pageNo, refresh) => {
        let { queryString } = this.props;
        return this.props.actions.searchTvshows(queryString, pageNo, refresh);
    }
    fetchSearchResultCommon = (refresh) => {
        let pageNo = 1;
        this.fetchSearchResult(pageNo, refresh);
    }
    handleEnd = () => {
        let { tvshowType, totalOnairPages,
            totalPopularPages, totalTopRatedPages,
            totalArivingPages, searchedTotalPages,
            pageNoPopularPages, pageNoArivingPages, pageNoTopRatedPages,
            pageNoOnairPages, pageNoSearched } = this.props;
        let totalPages = 0;
        let pageNo = -1;

        switch (tvshowType) {
            case Constants.TV_ARIVING_TVSHOWS:
                totalPages = totalArivingPages;
                pageNo = pageNoArivingPages
                break;
            case Constants.POPULAR_TVSHOWS:
                totalPages = totalPopularPages;
                pageNo = pageNoPopularPages;
                break;
            case Constants.TOP_RATED_TVSHOWS:
                totalPages = totalTopRatedPages;
                pageNo = pageNoTopRatedPages;
                break;
            case Constants.TV_ONAIR_TVSHOWS:
                totalPages = totalOnairPages;
                pageNo = pageNoOnairPages;
                break;
            case Constants.SEARCHED_TVSHOWS:
                totalPages = searchedTotalPages;
                pageNo = pageNoSearched;
                break;
            default:
                break;
        }
        let nextPage = pageNo + 1;
        if (nextPage <= totalPages) {
            this.props.actions.updateTvshowsPageNo(tvshowType, nextPage);
            if (tvshowType !== Constants.SEARCHED_TVSHOWS) {
                this.fetchTvshows(nextPage, "")
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    })
            } else {
                this.fetchSearchResult(nextPage, "")
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    })
            }
        }
    }
    _keyExtractor = (item, index) => index;

    renderItem = (item) => {
        return <TvshowItem
            tvshowItem={item}
            navigation={this.props.navigation}
        />
    }
    refreshList = () => {
        let { tvshowType } = this.props
        switch (tvshowType) {
            case Constants.TV_ARIVING_TVSHOWS:
                this.props.actions.resetTvairingTvshowsState();
                this.fetchTvshowsCommon(Constants.REFRESH);
                break;
            case Constants.POPULAR_TVSHOWS:
                this.props.actions.resetPopularTvshowsState();
                this.fetchTvshowsCommon(Constants.REFRESH);
                break;
            case Constants.TOP_RATED_TVSHOWS:
                this.props.actions.resetTopRatedTvshowsState();
                this.fetchTvshowsCommon(Constants.REFRESH);
                break;
            case Constants.TV_ONAIR_TVSHOWS:
                this.props.actions.resetTvonAirTvshowsState();
                this.fetchTvshowsCommon(Constants.REFRESH);
                break;
            case Constants.SEARCHED_TVSHOWS:
                this.props.actions.resetSearchedTvshows();
                this.fetchSearchResultCommon(Constants.REFRESH);
                break;
            default:
                break;
        }
    }
    render() {
        let { horizontal,
            popularTvshowsList, tvArivingTvshowsList, searchedTvshowsList,
            topRatedTvshowsList, tvOnAirTvshowsList,
            arivingTvshowsFetching, popularTvshowsFetching,
            topRatedTvshowsFetching, onairTvshowsFetching, searchedTvshowsFetching,
            tvshowType } = this.props;
        let tvshowsList = [],
            tvshowsFetching = false;
        let staticDimension = Metrics.screenWidth,
            gridHeight = { height: Metrics.screenHeight - 100 },
            spacing = 12;
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 185 };
            spacing = 1;
        }
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
            case Constants.SEARCHED_TVSHOWS:
                tvshowsList = searchedTvshowsList;
                tvshowsFetching = searchedTvshowsFetching;
                break;
            default:
                break;
        }
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
                    refreshList={this.refreshList}
                    moviesFetching={tvshowsFetching}
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

        pageNoPopularPages: state.data.popularTvshows.pageNo,
        pageNoArivingPages: state.data.tvArivingTvshows.pageNo,
        pageNoTopRatedPages: state.data.topRatedTvshows.pageNo,
        pageNoOnairPages: state.data.tvOnAirTvshows.pageNo,
        pageNoSearched: state.data.searchedTvshows.pageNo,

        popularTvshowsFetching: state.data.popularTvshows.tvshowsFetching,
        arivingTvshowsFetching: state.data.tvArivingTvshows.tvshowsFetching,
        topRatedTvshowsFetching: state.data.topRatedTvshows.tvshowsFetching,
        onairTvshowsFetching: state.data.tvOnAirTvshows.tvshowsFetching,

        searchedTvshowsList: _.get(state, 'data.searchedTvshows.searchedTvshowsList', []),
        searchedTvshowsFetching: state.data.searchedTvshows.tvshowsFetching,
        searchedTotalPages: state.data.searchedTvshows.totalPages,
    };
};
export default connect(mapStateToProps, mapDispatch)(RenderTvshowItem);