import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import TvshowItemStyle from './TvshowItemStyle'
import Poster from '../MovieItem/Poster';
import { connect } from 'react-redux'
import Constants from '../../../App/Constants/Constants';

class TvshowItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.tvshowItem.title !== nextProps.tvshowItem.title) {
            return true;
        }
        return false;
    }
    navigateToMovieDetails = (tvshowItem) => {
        let { connectionType } = this.props;
        if (['none', 'unknown'].includes(connectionType)) {
            this.props.navigation.navigate('NetworkError');
        } else {
            this.props.navigation.navigate({
                key: 'MovieDetail',
                routeName: 'MovieDetail',
                params: { movieId: tvshowItem.id, movieName: tvshowItem.name,movieOrTvshow:Constants.TVSHOWS }
            })
        }
    }
    render() {
        let { tvshowItem } = this.props;
        return (
            <TouchableOpacity onPress={() => this.navigateToMovieDetails(tvshowItem)}>
                <Poster
                    posterUrl={tvshowItem.poster_path}
                    posterStyle={TvshowItemStyle.image}
                />
            </TouchableOpacity>
        )
    }
}
TvshowItem.propTypes = {
    TvshowItem: PropTypes.object
}


const mapStateToProps = (state) => {
    return {
        connectionType: state.ui.networkInfo.connectionType
    };
};

export default connect(mapStateToProps, null)(TvshowItem);
