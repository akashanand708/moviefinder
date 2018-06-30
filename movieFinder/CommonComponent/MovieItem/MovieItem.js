import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import MovieItemStyle from './MovieItemStyle'
import Constants from '../../../App/Constants/Constants';
import Poster from './Poster';

class MovieItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.movieItem.title !== nextProps.movieItem.title) {
            return true;
        }
        return false;
    }
    navigateToMovieDetails = (movieId) => {
        this.props.navigation.navigate({
            key: 'MovieDetail',
            routeName: 'MovieDetail',
            params: { movieId: movieId }
        })
    }
    render() {
        let { movieItem } = this.props;
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(movieItem.id)}>
                <Poster
                    posterUrl={movieItem.poster_path}
                    posterStyle={MovieItemStyle.image}
                />
            </TouchableOpacity>
        )
    }
}
MovieItem.propTypes = {
    movieItem: PropTypes.object
}
export default MovieItem
