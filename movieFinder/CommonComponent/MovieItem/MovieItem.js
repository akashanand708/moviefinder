import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import MovieItemStyle from './MovieItemStyle'
import Poster from './Poster';
import { connect } from 'react-redux'

class MovieItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.movieItem.title !== nextProps.movieItem.title) {
            return true;
        }
        return false;
    }
    navigateToMovieDetails = (movieItem) => {
        let { connectionType } = this.props;
        if (['none', 'unknown'].includes(connectionType)) {
            this.props.navigation.navigate('NetworkError');
        } else {
            this.props.navigation.navigate({
                key: 'MovieDetail',
                routeName: 'MovieDetail',
                params: { movieId: movieItem.id, movieName: movieItem.original_title }
            })
        }
    }
    render() {
        let { movieItem } = this.props;
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(movieItem)}>
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


const mapStateToProps = (state) => {
    return {
        connectionType: state.ui.networkInfo.connectionType
    };
};

export default connect(mapStateToProps, null)(MovieItem);
