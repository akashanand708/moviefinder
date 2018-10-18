import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import Constants from '../../../App/Constants/Constants';
import style from './style';


const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
const DEFAULT_PROFILE_PIC = '';
class People extends Component {

    navigateToMovieDetails = (people) => {
        console.log("CLICKED PEOPLE......", people);
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
    }
    render() {
        let { people, type, castCrewType } = this.props,
            character = people.character,
            profilepath = DEFAULT_PROFILE_PIC;

        if (!_.isEmpty(people.profile_path)) {
            profilepath = PROFILE_PIC_URL + `${people.profile_path}`;
        }
        if (type === 'cast_crew') {
            profileImageStyle = style.castImage;
            if (castCrewType === Constants.CAST_CREW.CREW) {
                character = `(${people.job})`
            }
        } else {//People
            profileImageStyle = style.peopleImage
        }
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(people)}>
                <View style={[style.peopleMain]}>
                    <Image
                        style={profileImageStyle}
                        source={{ uri: profilepath }}
                    />
                    <Text style={style.name}>{people.name}</Text>
                    <Text style={style.character}>{character}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
export default People;
