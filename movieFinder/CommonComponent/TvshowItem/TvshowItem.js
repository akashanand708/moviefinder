import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import TvshowItemStyle from './TvshowItemStyle'
import Poster from '../MovieItem/Poster';
import Constants from '../../../App/Constants/Constants';

const TvshowItem = (props) => {

    let navigateToMovieDetails = (tvshowItem) => {
        let { connectionType } = props;
        if (['none', 'unknown'].includes(connectionType)) {
            props.navigation.push('NetworkError');
        } else {
            props.navigation.push('MovieDetail', {
                movieId: tvshowItem.id, movieName: tvshowItem.name, movieOrTvshow: Constants.TVSHOWS
            })
        }
    }
    let { tvshowItem } = props;
    return (
        <TouchableOpacity onPress={() => navigateToMovieDetails(tvshowItem)}>
            <Poster
                posterUrl={tvshowItem.poster_path}
                posterStyle={TvshowItemStyle.image}
                posterType="tv_show"
            />
        </TouchableOpacity>
    )
}
TvshowItem.propTypes = {
    TvshowItem: PropTypes.object
}

export default TvshowItem;
