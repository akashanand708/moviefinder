import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import MovieItemStyle from './MovieItemStyle'
import Poster from './Poster';
import { connect } from 'react-redux'
import Constants from '../../../App/Constants/Constants';
import MovieDetail from './MovieDetail';

const MovieItem = (props) => {

    let navigateToMovieDetails = (movieItem) => {
        let { connectionType } = props;
        if (['none', 'unknown'].includes(connectionType)) {
            props.navigation.push('NetworkError');
        } else {
            props.navigation.push(
                'MovieDetail',
                {
                    movieId: movieItem.id, movieName: movieItem.original_title, movieOrTvshow: Constants.MOVIE
                })
        }
    }
    let { movieItem } = props;
    return (
        <View style={{ borderRadius: 5 }}>
            <TouchableOpacity onPress={() => navigateToMovieDetails(movieItem)}>
                <Poster
                    posterUrl={movieItem.poster_path}
                    posterStyle={MovieItemStyle.image}
                    movieName={movieItem.original_title}
                />
            </TouchableOpacity>
        </View>
    )
}
MovieItem.propTypes = {
    movieItem: PropTypes.object
}


const mapStateToProps = (state) => {
    return {
        connectionType: state.ui.networkInfo.connectionType
    };
};

export default connect(mapStateToProps, null)(MovieItem);
