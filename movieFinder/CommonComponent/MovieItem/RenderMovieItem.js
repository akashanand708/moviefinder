// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GridView from 'react-native-super-grid'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import MovieItem from './MovieItem';
import _ from 'lodash';

class RenderMovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        }
    }
    componentDidMount() {
        this.fetchMovies();
    }

    componentWillUnmount() {
        console.log("UNMOUNT.......");
        this.props.actions.resetPopularMoviesState();
    }
    fetchMovies = () => {
        let { pageNo } = this.state;
        let { movieType } = this.props;
        return this.props.actions.fetchMovies(pageNo, movieType);
    }
    handleEnd = () => {
        console.log('End raeched...');
        // if (!this.onEndReachedCalledDuringMomentum) {
        let { totalPages } = this.props;
        let nextPage = this.state.pageNo + 1;
        if (nextPage <= totalPages) {
            this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {
                this.fetchMovies()
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    })
            })
        }
        // }
    }
    _keyExtractor = (item, index) => item.id;

    _shouldItemUpdate = (prev, next) => {
        return prev.item !== next.item;
    }
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };
    render() {
        let { moviesList, moviesFetching } = this.props;
        console.log("VIDEO MOVIES",_.filter(moviesList, [ 'video', true ]))
        return (
            <GridView
                itemDimension={150}
                items={moviesList}
                spacing={2}
                keyExtractor={this._keyExtractor}
                ListFooterComponent={() => { return <ActivityIndicator animating={moviesFetching} size="large" /> }}
                initialNumToRender={1}
                // handleEndReached={() => this.handleEnd()}
                // handleEndReachedThreshold={0}
                onEndReached={() => this.handleEnd()}
                onEndReachedThreshold={0.8}
                //shouldItemUpdate={this._shouldItemUpdate}
                renderItem={item => (
                    <MovieItem
                        movieItem={item}
                    //navigation={navigation}
                    />
                )}
            />
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        moviesList: state.data.movies.moviesList,
        moviesFetching: state.data.movies.moviesFetching,
        totalPages: state.data.movies.totalPages
    };
};

export default connect(mapStateToProps, mapDispatch)(RenderMovieItem);
