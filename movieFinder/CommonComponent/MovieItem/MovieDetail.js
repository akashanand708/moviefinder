import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';
import { View, ActivityIndicator } from 'react-native'
import Styles from './MovieDetailTabNavigator/style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import MovieDetailTabNavigator from './MovieDetailTabNavigator/MovieDetailTabNavigator';
import MovieDetailHeader from './MovieDetailHeader';
class MovieDetail extends Component {

    componentWillMount() {
        this.props.actions.resetMovieDetailState();
    }
    componentDidMount() {
        this.props.navigation.addListener("didFocus", () => {
            let { movieId, movieOrTvshow } = this.props.navigation.state.params;
            console.log("Movie detail......", movieId);
            this.props.actions.fetchMovieDetail(movieId, movieOrTvshow);
        });
    }
    componentWillUnmount() {
        this.props.actions.resetMovieDetailState();
    }
    goBack = () => {
        this.props.navigation.pop();
        this.props.actions.backAction();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };
    render() {
        let { movieDetail, movieDetailFetching } = this.props;
        let { movieId, movieOrTvshow } = this.props.navigation.state.params;
        console.log("MOVIE DETAIL....", movieDetail);
        return (
            <React.Fragment>
                {
                    !_.isEmpty(movieDetail) ?
                        (<View style={Styles.mainContainer}>
                            {
                                movieDetail && !movieDetailFetching &&
                                <MovieDetailHeader
                                    goBack={this.goBack}
                                    navigation={this.props.navigation}
                                    movieOrTvshow={movieOrTvshow}
                                />
                            }
                            {
                                movieDetail && !movieDetailFetching &&
                                <MovieDetailTabNavigator
                                    screenProps={{ movieOrTvshow, navigation: this.props.navigation }}
                                />
                            }
                            <ActivityIndicator animating={movieDetailFetching} size="large" />
                        </View>) : null
                }
            </React.Fragment>
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
        movieDetailFetching: state.data.movieDetail.movieDetailFetching,
        movieDetail: state.data.movieDetail.movieDetail,
    };
};

export default connect(mapStateToProps, mapDispatch)(MovieDetail);


