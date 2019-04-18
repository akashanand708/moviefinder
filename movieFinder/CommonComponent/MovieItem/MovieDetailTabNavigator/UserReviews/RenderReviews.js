import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { isArray } from 'lodash';
import ReviewItem from './ReviewItem'
import { Metrics } from '../../../../DevScreens/DevTheme'
import style from './style';

import SuperGridSectionListCustom from '../../../SuperGridSectionListCustom';

class RenderReviews extends React.Component {

    handleEnd = () => {

    }

    renderItem = (item, index) => {
        return <ReviewItem
            key={index}
            reviewItem={item}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { reviews, horizontal } = this.props,
            itemDimension = 300
        let staticDimension = Metrics.screenWidth - 100,
            gridHeight = { height: 210 },
            spacing = 5;

        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                {
                    isArray(reviews) && reviews.length > 0 &&
                    <SuperGridSectionListCustom
                        itemList={reviews}
                        gridHeight={gridHeight}
                        spacing={spacing}
                        horizontal={horizontal}
                        staticDimension={staticDimension}
                        itemDimension={itemDimension}
                        handleEnd={this.handleEnd}
                        renderItem={this.renderItem}
                        navigation={this.props.navigation}
                        moviesFetching={false}
                    />
                }
                {
                    (!reviews) || (isArray(reviews) && reviews.length === 0) &&
                    <View style={style.reviewMain}>
                        <Text>No reviews available.</Text>
                    </View>
                }

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: _.get(state, 'data.movieDetail.movieDetail.reviews.results', {})
    };
};
export default connect(mapStateToProps, null)(RenderReviews);