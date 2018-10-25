import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import People from '../../../People/People';

import SuperGridSectionListCustom from '../../../SuperGridSectionListCustom';

const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
class RenderImages extends React.Component {

    handleEnd = () => {

    }

    renderItem = (item, index) => {
        let { imageType, images } = this.props;
        let imageSize = '';
        switch (imageType) {
            case Constants.IMAGE_TYPE.BACKDROPS:
                imageList = images.backdrops;
                imageSize = Constants.IMAGE_SIZE.LIGHT_BOX_BACKDROP_IMAGE_SIZE;
                break;
            case Constants.IMAGE_TYPE.POSTERS:
                imageList = images.posters;
                imageSize = Constants.IMAGE_SIZE.LIGHT_BOX_POSTER_IMAGE_SIZE;
                break;
            default:
                break;
        }
        imageList = imageList.map((item, index) => {
            return {
                ...item,
                index: index,
                url: PROFILE_PIC_URL + `/${imageSize}${item.file_path}`,
                props: {

                }
            };
        })
        return <People
            people={item}
            type="image"
            imageType={imageType}
            images={imageList}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { images, imageType, horizontal } = this.props,
            imageSize = '';
        itemDimension = 100;
        let imageList = [];
        let staticDimension = 0,
            gridHeight = {},
            spacing = 20;
        if (horizontal) {
            staticDimension = 70;
            gridHeight = { height: 140 };
            spacing = 1;
        }
        switch (imageType) {
            case Constants.IMAGE_TYPE.BACKDROPS:
                imageList = images.backdrops || [];
                itemDimension = 190;
                // imageSize = Constants.IMAGE_SIZE.IMG_TAB_BACKDROP_SIZE;
                break;
            case Constants.IMAGE_TYPE.POSTERS:
                imageList = images.posters || [];
                itemDimension = 75
                // imageSize = Constants.IMAGE_SIZE.POSTER_IMAGE_SIZE;
                break;
            default:
                break;
        }

        imageList = imageList.map((item, index) => {
            return {
                ...item,
                index: index
            };
        })

        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                <SuperGridSectionListCustom
                    itemList={imageList}
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

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: _.get(state, 'data.movieDetail.movieDetail.images', {backdrops:[],posters:[]})
    };
};
export default connect(mapStateToProps, null)(RenderImages);