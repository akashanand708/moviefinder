import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import style from './style';
import Utils from '../../../../Utility/Utils';
import Constants from '../../../../../App/Constants/Constants';

class Info extends React.Component {

    renderInfo = () => {
        let { movieDetail, movieOrTvshow } = this.props,
            productionCompanies = Utils.ConcatArrayString(movieDetail.production_companies);

        if (movieOrTvshow === Constants.MOVIE) {
            let budget = Utils.formatDoller(movieDetail.budget),
                revenue = Utils.formatDoller(movieDetail.revenue),
                languages = Utils.ConcatArrayString(movieDetail.spoken_languages),
                importantPeople = Utils.getImportantPeople(movieDetail.casts && movieDetail.casts.crew);
            return <View>
                <View style={style.commonMargin}><Text style={style.infoSubtitle}>{movieDetail.overview}</Text></View>
                {importantPeople.producer && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Director</Text><Text style={[style.infoSubtitle]}>{importantPeople.director}</Text></View>}
                {importantPeople.producer && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Producer</Text><Text style={[style.infoSubtitle]}>{importantPeople.producer}</Text></View>}
                {productionCompanies && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Production companies</Text><Text style={[style.infoSubtitle]}>{productionCompanies}</Text></View>}
                {budget && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Budget</Text><Text style={[style.infoSubtitle]}>{budget}</Text></View>}
                {revenue && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Revenue</Text><Text style={[style.infoSubtitle]}>{revenue}</Text></View>}
                {languages  && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Languages</Text><Text style={[style.infoSubtitle]}>{languages}</Text></View>}
                {movieDetail.status && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Status</Text><Text style={[style.infoSubtitle]}>{movieDetail.status}</Text></View>}
            </View>
        } else {
            let createdBy = Utils.ConcatArrayString(movieDetail.created_by);
            return <View>
                <View style={style.commonMargin}><Text style={style.infoSubtitle}>{movieDetail.overview}</Text></View>
                {createdBy && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Created by</Text><Text style={[style.infoSubtitle]}>{createdBy}</Text></View>}
                {productionCompanies && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Production companies</Text><Text style={[style.infoSubtitle]}>{productionCompanies}</Text></View>}
                {movieDetail.number_of_seasons && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Number of seasons</Text><Text style={[style.infoSubtitle]}>{movieDetail.number_of_seasons}</Text></View>}
                {movieDetail.number_of_episodes && <View style={style.commonMargin}><Text style={[style.infoTitle]}>Number of episodes</Text><Text style={[style.infoSubtitle]}>{movieDetail.number_of_episodes}</Text></View>}
            </View>
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    {
                        this.renderInfo()
                    }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetail: state.data.movieDetail.movieDetail,
    };
};

export default connect(mapStateToProps, null)(Info);