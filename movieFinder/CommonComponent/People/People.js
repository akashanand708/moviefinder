import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'

import ImageLightbox from '../ImageLightBox';
// import {
//     CachedImage
// } from 'react-native-cached-image';
import Constants from '../../../App/Constants/Constants';
import style from './style';


const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
const DEFAULT_PROFILE_PIC = '';
class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    navigateToMovieDetails = (people) => {
        // console.log("CLICKED PEOPLE......", people);
        // let { connectionType } = this.props;
        // if (['none', 'unknown'].includes(connectionType)) {
        //     this.props.navigation.navigate('NetworkError');
        // } else {
        //     this.props.navigation.navigate({
        //         key: 'MovieDetail',
        //         routeName: 'MovieDetail',
        //         params: { movieId: movieItem.id, movieName: movieItem.original_title }
        //     })
        // }
        this.openLightBox();
    }
    openLightBox = () => {
        this.setState({ visible: true });
    }

    closeLightBox = () => {
        this.setState({ visible: false });
    }

    render() {
        let { people, type, castCrewType, imageType, images } = this.props,
            character = people.character,
            profilepath = DEFAULT_PROFILE_PIC,
            profileImageStyle = {},
            imageSize = Constants.IMAGE_SIZE.PROFILE_IMAGE_SIZE;

        let { visible } = this.state;
        if (type === 'cast_crew') {
            profileImageStyle = style.castImage;
            if (castCrewType === Constants.CAST_CREW.CREW) {
                character = `(${people.job})`
            }
        } else if (type === 'people') {
            profileImageStyle = style.peopleImage;
        } else if (type === 'image') {
            console.log("PEOPLE images......", images);
            profileImageStyle = { height: 100 };
            profileImageStyle.width = profileImageStyle.height * people.aspect_ratio;
            if (imageType === Constants.IMAGE_TYPE.BACKDROPS) {
                imageSize = Constants.IMAGE_SIZE.IMG_TAB_BACKDROP_SIZE;
            } else {
                imageSize = Constants.IMAGE_SIZE.POSTER_IMAGE_SIZE;
            }
        }
        if (!_.isEmpty(people.profile_path) || !_.isEmpty(people.file_path)) {
            profilepath = PROFILE_PIC_URL + `/${imageSize}${people.profile_path || people.file_path}`;
        }
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(people)}>
                <View style={profileImageStyle}>
                    <Image
                        style={profileImageStyle}
                        source={{ uri: profilepath }}
                    />
                    {
                        type !== 'image' &&
                        <View>
                            < Text style={style.name}>{people.name}</Text>
                            <Text style={style.character}>{character}</Text>
                        </View>
                    }
                </View>
                {
                    visible &&
                    <ImageLightbox
                        images={images}
                        index={people.index}
                        closeLightBox={this.closeLightBox}
                        // renderHeader={this.renderHeader}
                        // renderFooter={this.renderHeader}
                    />
                }
            </TouchableOpacity >
        )
    }
}
export default People;
