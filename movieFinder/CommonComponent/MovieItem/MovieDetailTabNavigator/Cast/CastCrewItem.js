import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TouchableOpacity,Text } from 'react-native'
import Poster from '../../Poster';


class CastCrewItem extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.movieItem.title !== nextProps.movieItem.title) {
    //         return true;
    //     }
    //     return false;
    // }
    navigateToMovieDetails = (CastCrewItem) => {
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
        let { CastCrewItem } = this.props;
        console.log("Cast crew ITEM.....", CastCrewItem);
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(CastCrewItem)}>
                <Text>CAST AND CREW</Text>
            </TouchableOpacity>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        connectionType: state.ui.networkInfo.connectionType
    };
};

export default connect(mapStateToProps, null)(CastCrewItem);
