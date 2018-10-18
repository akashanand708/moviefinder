import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import People from '../../../People/People';
import SuperGridSectionListCustom from '../../../SuperGridSectionListCustom';
import CastCrewItem from './CastCrewItem';

class RenderCast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        }
    }

    // handleEnd = () => {
    //     let { movieType, totalPages, } = this.props;
    //     if (horizontal) {
    //         switch (movieType) {
    //             case Constants.NOW_PLAYING_MOVIES:
    //                 totalPages = totalNowPlayingPages;
    //                 break;
    //             case Constants.POPULAR_MOVIES:
    //                 totalPages = totalPopularPages;
    //                 break;
    //             case Constants.TOP_RATED_MOVIES:
    //                 totalPages = totalTopRatedPages;
    //                 break;
    //             case Constants.UPCOMING_MOVIES:
    //                 totalPages = totalUpcomingPages;
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    //     let nextPage = this.state.pageNo + 1;
    //     if (nextPage <= totalPages) {
    //         this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {
    //             this.fetchMovies()
    //                 .then(() => {
    //                     this.onEndReachedCalledDuringMomentum = true;
    //                 })
    //         })
    //     }
    // }
    handleEnd = () => {

    }
    _keyExtractor = (item, index) => index;

    renderItem = (item) => {
        let { castCrewType } = this.props;
        return <People
            people={item}
            type="cast_crew"
            castCrewType={castCrewType}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { castCrewObject, castCrewType, horizontal } = this.props;
        let castCrewList = [];
        let staticDimension = 0,
            gridHeight = {},
            spacing = 18;
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 195 };
            spacing = 1;
        }
        switch (castCrewType) {
            case Constants.CAST_CREW.CAST:
                castCrewList = castCrewObject.cast;
                break;
            case Constants.CAST_CREW.CREW:
                castCrewList = castCrewObject.crew;
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
                    itemList={castCrewList}
                    gridHeight={gridHeight}
                    spacing={spacing}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    handleEnd={this.handleEnd}
                    renderItem={this.renderItem}
                    navigation={this.props.navigation}
                    moviesFetching={false}
                    renderItemType="CAST_CREW"
                />
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        castCrewObject: state.data.movieDetail.movieDetail.casts || state.data.movieDetail.movieDetail.credits
    };
};
export default connect(mapStateToProps, null)(RenderCast);