import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
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
            spacing = 20,
            itemDimension = {};
        if (horizontal) {
            staticDimension = 70;
            gridHeight = { height: 195 };
            spacing = 5;
            itemDimension = 100;
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
                    itemDimension={itemDimension}
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
        castCrewObject :_.get(state, 'data.movieDetail.movieDetail.casts', { cast: [], crew: [] })
    };
};
export default connect(mapStateToProps, null)(RenderCast);