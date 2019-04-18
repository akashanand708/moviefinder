import React from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../../../App/Actions/fetchMovieActions'
import style from './style';
import Utils from '../../../../Utility/Utils';
import Constants from '../../../../../App/Constants/Constants';
import ViewMoreText from 'react-native-view-more-text';

class Info extends React.Component {

    renderViewMore = (onPress) => {
        return (
            <Text style={style.readMoreLess} onPress={onPress}>Read more</Text>
        )
    }
    renderViewLess = (onPress) => {
        return (
            <Text style={style.readMoreLess} onPress={onPress}>Read less</Text>
        )
    }

    renderInfo = () => {
        let { movieDetail, movieOrTvshow } = this.props,
            productionCompanies = Utils.ConcatArrayString(movieDetail.production_companies);
        let genre = Utils.ConcatArrayString(movieDetail.genres),
            dateString = Utils.convertDate(movieDetail.release_date || movieDetail.first_air_date),
            country = Utils.getProductionCountryString(movieDetail.production_countries || movieDetail.origin_country);

        if (movieOrTvshow === Constants.MOVIE) {
            let budget = Utils.formatDoller(movieDetail.budget),
                revenue = Utils.formatDoller(movieDetail.revenue),
                languages = Utils.ConcatArrayString(movieDetail.spoken_languages),
                importantPeople = Utils.getImportantPeople(movieDetail.casts && movieDetail.casts.crew);
            return <View>
                <ViewMoreText
                    style={style.commonMargin}
                    numberOfLines={3}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}>
                    <Text style={[style.infoSubtitle]}>
                        {movieDetail.overview}
                    </Text>
                </ViewMoreText>
                {dateString !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Release date</Text><Text style={[style.infoSubtitle]}>{dateString}</Text></View>}
                {movieDetail.status !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Status</Text><Text style={[style.infoSubtitle]}>{movieDetail.status}</Text></View>}
                {genre !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Genre</Text><Text style={[style.infoSubtitle]}>{genre}</Text></View>}
                {country !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Country</Text><Text style={[style.infoSubtitle]}>{country}</Text></View>}
                {movieDetail.homepage !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Url</Text><Text style={[style.infoSubtitle, style.underLine]} onPress={() => Linking.openURL(movieDetail.homepage)}>{movieDetail.homepage}</Text></View>}
                {importantPeople.director !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Director</Text><Text style={[style.infoSubtitle]}>{importantPeople.director}</Text></View>}
                {importantPeople.producer !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Producer</Text><Text style={[style.infoSubtitle]}>{importantPeople.producer}</Text></View>}
                {productionCompanies !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Production companies</Text><Text style={[style.infoSubtitle]}>{productionCompanies}</Text></View>}
                {budget !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Budget</Text><Text style={[style.infoSubtitle]}>{budget}</Text></View>}
                {revenue !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Revenue</Text><Text style={[style.infoSubtitle]}>{revenue}</Text></View>}
                {languages !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Languages</Text><Text style={[style.infoSubtitle]}>{languages}</Text></View>}
            </View>
        } else {
            let createdBy = Utils.ConcatArrayString(movieDetail.created_by);
            return <View>
                <ViewMoreText
                    style={style.commonMargin}
                    numberOfLines={3}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}
                >
                    <Text style={[style.infoSubtitle]}>
                        {movieDetail.overview}
                    </Text>
                </ViewMoreText>
                {dateString !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>First air date</Text><Text style={[style.infoSubtitle]}>{dateString}</Text></View>}
                {genre !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Genre</Text><Text style={[style.infoSubtitle]}>{genre}</Text></View>}
                {country !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Country</Text><Text style={[style.infoSubtitle]}>{country}</Text></View>}
                {createdBy !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Created by</Text><Text style={[style.infoSubtitle]}>{createdBy}</Text></View>}
                {productionCompanies !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Production companies</Text><Text style={[style.infoSubtitle]}>{productionCompanies}</Text></View>}
                {movieDetail.number_of_seasons !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Number of seasons</Text><Text style={[style.infoSubtitle]}>{movieDetail.number_of_seasons}</Text></View>}
                {movieDetail.number_of_episodes !== '' && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Number of episodes</Text><Text style={[style.infoSubtitle]}>{movieDetail.number_of_episodes}</Text></View>}
            </View>
        }
    }

    render() {
        return (
            <View style={style.container}>
                {
                    this.renderInfo()
                }
            </View>
        );
    }
}
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        movieDetail: state.data.movieDetail.movieDetail,
    };
};

export default connect(mapStateToProps, mapDispatch)(Info);