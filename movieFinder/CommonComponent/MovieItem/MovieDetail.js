import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity, Animated } from 'react-native'
import MovieDetailStyle from './MovieDetailStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Images } from '../../../App/Themes'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let { movieId } = this.props.navigation.state.params;
        this.props.actions.fetchMovieDetail(movieId);
    }

    componentWillUnmount() {
        this.props.actions.resetMovieDetailState();
    }
    render() {
        let { movieDetail, movieDetailFetching } = this.props;
        console.log("MOVIE DETAILS....", movieDetail);
        return (
            <View style={MovieDetailStyle.itemContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
                    position: 'absolute',
                    paddingTop: 30,
                    paddingHorizontal: 5,
                    zIndex: 10
                }}>
                    <Image source={Images.backButton} />
                </TouchableOpacity>

                <Text>
                    Movie details
                </Text>
                {/* <View>
                    <RenderMovieItem
                        movieType={Constants.POPULAR_MOVIES}
                    />
                </View> */}
            </View >
        )
    }
}
MovieDetail.propTypes = {
    movieItem: PropTypes.object
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        movieDetail: state.data.movieDetail.movieDetail,
        movieDetailFetching: state.data.movieDetail.movieDetailFetching,
    };
};

export default connect(mapStateToProps, mapDispatch)(MovieDetail);


