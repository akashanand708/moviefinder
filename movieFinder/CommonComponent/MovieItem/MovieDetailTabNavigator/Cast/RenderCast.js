import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import People from '../../../People/People';
import SuperGridSectionListCustom from '../../../SuperGridSectionListCustom';

class RenderCast extends React.Component {

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
            spacing = 20;
        if (horizontal) {
            staticDimension = 70;
            gridHeight = { height: 120 };
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