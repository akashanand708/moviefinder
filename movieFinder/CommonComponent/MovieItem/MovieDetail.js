import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity, Text, ScrollView, RefreshControl } from 'react-native'
import { Tab, Tabs, Icon } from 'native-base';
import MovieDetailStyle from './MovieDetailStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Images } from '../../../App/Themes'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import Poster from './Poster';
class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // movieDetail: {}
            wait: false,
        }
    }
    componentDidMount() {
        let { movieId } = this.props.navigation.state.params;
        this.props.actions.fetchMovieDetail(movieId);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.movieDetail !== nextProps.movieDetail) {
    //         this.setState({ movieDetail: nextProps.movieDetail });
    //     }
    // }
    componentWillUnmount() {
        this.props.actions.resetMovieDetailState();
    }

    render() {
        let { movieDetail, movieDetailFetching } = this.props;
        let { wait } = this.state;
        console.log("MOVIE DETAILS....", movieDetail);
        return (
            <View style={MovieDetailStyle.mainContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
                    position: 'absolute',
                    paddingTop: 30,
                    paddingHorizontal: 5,
                    zIndex: 10
                }}>
                    <Image source={Images.backButton} />
                </TouchableOpacity>
                <View style={[MovieDetailStyle.movieListContainer, MovieDetailStyle.detail]}>
                    <Poster
                        posterUrl={movieDetail.backdrop_path}
                        posterStyle={MovieDetailStyle.image}
                    />

                    <Tabs locked={true}
                    //onChangeTab={({ ref }) => this.onTabChange(ref.props.heading.props.name)}
                    //page={currentTabIndex}
                    >
                        <Tab heading={<View name={0} ><Text>Details</Text></View>}>
                            <View style={{ width: '100%', height: '100%' }}>
                                <ScrollView
                                    refreshControl={
                                        <RefreshControl
                                        // refreshing={wait}
                                        // onRefresh={this._onRefresh}
                                        />
                                    }
                                    style={{ width: '100%' }}>
                                    Details
                                </ScrollView>
                            </View>
                        </Tab>
                        <Tab heading={<View name={1} ><Text>Trailers</Text></View>}>
                            <View style={{ width: '100%', height: '100%' }}>
                                <ScrollView
                                    refreshControl={
                                        <RefreshControl
                                        // refreshing={wait}
                                        // onRefresh={this._onRefresh}
                                        />
                                    }
                                    style={{ width: '100%' }}>
                                    Trailers
                                </ScrollView>
                            </View>
                        </Tab>
                    </Tabs>
                </View>
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


