import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import TvshowItemStyle from './TvshowItemStyle'
import Poster from '../MovieItem/Poster';
import { connect } from 'react-redux'
import Constants from '../../../App/Constants/Constants';

const TvshowItem = (props) => {

    let navigateToMovieDetails = (tvshowItem) => {
        let { connectionType } = props;
        if (['none', 'unknown'].includes(connectionType)) {
            props.navigation.navigate('NetworkError');
        } else {
            props.navigation.navigate({
                key: 'MovieDetail',
                routeName: 'MovieDetail',
                params: { movieId: tvshowItem.id, movieName: tvshowItem.name, movieOrTvshow: Constants.TVSHOWS }
            })
        }
    }
    console.log("Render TV SHOWS item.........");
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


// const mapStateToProps = (state) => {
//     return {
//         connectionType: state.ui.networkInfo.connectionType
//     };
// };

// export default connect(mapStateToProps, null)(TvshowItem);
export default TvshowItem;
