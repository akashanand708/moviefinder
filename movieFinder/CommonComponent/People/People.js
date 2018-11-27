import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import ImageLightbox from '../ImageLightBox';
import Poster from '../MovieItem/Poster';

import Constants from '../../../App/Constants/Constants';
import style from './style';


const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
const DEFAULT_PROFILE_PIC = '';
class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            imageLoading: true
        }
    }

    // TODO shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.people === nextProps.people) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    navigateToMovieDetails = (people) => {
        let { connectionType, type } = this.props;
        if (['none', 'unknown'].includes(connectionType)) {
            this.props.navigation.navigate('NetworkError');
        } else {
            this.props.navigation.navigate({
                key: 'PeopleDetail',
                routeName: 'PeopleDetail',
                params: { peopleId: people.id, peopleName: people.name }
            })
        }
        if (type === 'image') {
            this.openLightBox();
        }
    }
    openLightBox = () => {
        this.setState({ visible: true });
    }

    closeLightBox = () => {
        this.setState({ visible: false });
    }

    imageLoadingComplete = () => {
        this.setState({ imageLoading: false });
    }
    render() {
        console.log("Render People item.........");
        let { people, type, castCrewType, imageType, images } = this.props,
            character = people.character,
            profilepath = DEFAULT_PROFILE_PIC,
            profileImageStyle = {},
            profileImageContainer = {},
            imageSize = Constants.IMAGE_SIZE.PROFILE_IMAGE_SIZE;

        let { visible, imageLoading } = this.state;
        if (type === 'cast_crew') {
            profileImageStyle = style.castImage;
            profileImageContainer = { height: 160 };
            if (castCrewType === Constants.CAST_CREW.CREW) {
                character = `(${people.job})`
            }
        } else if (type === 'people') {
            profileImageStyle = style.peopleImage;
            profileImageContainer = style.profileImageContainer
        } else if (type === 'image') {
            profileImageStyle = { height: 100 };
            profileImageStyle.width = profileImageStyle.height * people.aspect_ratio;
            profileImageContainer = profileImageStyle;
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
                <View style={profileImageContainer}>

                    <Poster
                        posterUrl={people.profile_path || people.file_path}
                        posterStyle={profileImageStyle}
                        posterType={type}
                    >

                        {
                            ["people", "cast_crew"].includes(type) &&
                            <View style={{ width: '100%' }}>
                                <Text style={style.name}>{people.name}</Text>
                                {character !== '' && <Text style={style.character} numberOfLines={1}>{character}</Text>}
                            </View>
                        }
                    </Poster>

                </View>
                {
                    visible &&
                    <ImageLightbox
                        images={images}
                        index={people.index}
                        visible={visible}
                        closeLightBox={this.closeLightBox}
                    />
                }
            </TouchableOpacity >
        )
    }
}
export default People;
