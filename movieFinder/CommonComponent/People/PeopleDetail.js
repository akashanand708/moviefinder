import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import style from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchPeoplesActions from '../../../App/Actions/fetchPeopleActions'
import Poster from '../MovieItem/Poster';
import RenderMovieItem from '../MovieItem/RenderTrailer/RenderMovieItem';
import SuperGridSectionListCustom from '../SuperGridSectionListCustom';
import MovieItem from '../MovieItem/MovieItem';
import Constants from '../../../App/Constants/Constants';
import People from './People';


const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
class PeopleDetail extends Component {

    componentDidMount() {
        let { peopleId } = this.props.navigation.state.params;
        this.props.actions.fetchPeopleDetail(peopleId);
        this.props.actions.fetchCombinedCredits(peopleId);
    }
    componentWillUnmount() {
        this.props.actions.resetPeopleDetailState();
    }
    goBack = () => {
        this.props.navigation.goBack();
        this.props.actions.backAction();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('peopleName', ''),
        };
    };
    renderItem = (item) => {
        return <MovieItem
            movieItem={item}
            key={item.id}
            navigation={this.props.navigation}
        />
    }

    renderProfileItem = (item, index) => {
        let imageList = _.get(this.props, 'peopleDetail.images.profiles', [])
        let imageSize = Constants.IMAGE_SIZE.LIGHT_BOX_POSTER_IMAGE_SIZE;
        imageList = imageList.map((item, index) => {
            return {
                ...item,
                index: index,
                url: PROFILE_PIC_URL + `/${imageSize}${item.file_path}`,
                props: {

                }
            };
        })
        item = { ...item, index };
        return <People
            people={item}
            key={item.file_path}
            type="people"
            isOpenLightBox={true}
            showName={false}
            imageType={Constants.IMAGE_TYPE.BACKDROPS}
            images={imageList}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { peopleDetail, peopleDetailFetching, combinedCredit } = this.props;
        let { peopleId, peopleName } = this.props.navigation.state.params;

        let moviesList = _.get(this.props, 'combinedCredit.cast', []);
        let profilePics = _.get(this.props, 'peopleDetail.images.profiles', [])
        let staticDimension = 110,
            gridHeight = { height: 185 },
            spacing = 1;
        console.log("People detail...", peopleDetail, combinedCredit);
        return (
            <React.Fragment>
                {
                    !_.isEmpty(peopleDetail) ?
                        (<ScrollView style={style.mainContainer}>
                            <View style={style.peopleImageMain}>
                                <People
                                    people={peopleDetail}
                                    type="people"
                                    isOpenLightBox={false}
                                    showName={false}
                                    imageType={Constants.IMAGE_TYPE.BACKDROPS}
                                    images={[]}
                                    navigation={this.props.navigation}
                                />
                            </View>
                            <View style={[style.biography]}>
                                <Text style={[style.profilePic, style.infoTitle]}>Biography</Text>
                                <Text style={[style.infoSubtitle]}>
                                    {peopleDetail.biography}
                                </Text>
                            </View>
                            <View style={[style.commonMargin]}>
                                <Text style={[style.infoTitle]}>Known For</Text>
                                <SuperGridSectionListCustom
                                    itemList={moviesList}
                                    gridHeight={gridHeight}
                                    spacing={spacing}
                                    horizontal={true}
                                    staticDimension={staticDimension}
                                    handleEnd={() => { }}
                                    renderItem={this.renderItem}
                                    navigation={this.props.navigation}
                                    refreshList={() => { }}
                                    moviesFetching={false}
                                />
                            </View>
                            <View style={[style.commonMargin]}>
                                <Text style={[style.profilePic, style.infoTitle]}>Profile pics</Text>
                                <SuperGridSectionListCustom
                                    itemList={profilePics}
                                    gridHeight={gridHeight}
                                    spacing={spacing}
                                    horizontal={true}
                                    staticDimension={staticDimension}
                                    handleEnd={() => { }}
                                    renderItem={this.renderProfileItem}
                                    navigation={this.props.navigation}
                                    moviesFetching={false}
                                />
                            </View>
                            <View style={style.alignColumnLeft}>
                                <Text style={[style.title]}>Personal Info</Text>
                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}>Known For</Text>
                                    <Text style={[style.infoSubtitle]}>
                                        {peopleDetail.known_for_department}
                                    </Text>
                                </View>

                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}>Gender</Text>
                                    <Text style={[style.infoSubtitle]}>
                                        {Constants.GENDER[peopleDetail.gender]}
                                    </Text>
                                </View>

                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}>Birthday</Text>
                                    <Text style={[style.infoSubtitle]}>
                                        {peopleDetail.birthday ? peopleDetail.birthday : '-'}
                                    </Text>
                                </View>

                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}>Place of Birth</Text>
                                    <Text style={[style.infoSubtitle]}>
                                        {!peopleDetail.place_of_birth ? peopleDetail.place_of_birth : '-'}
                                    </Text>
                                </View>

                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}>Official Site</Text>
                                    <Text style={[style.infoSubtitle]}>
                                        {peopleDetail.homepage ? peopleDetail.homepage : '-'}
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                        ) : null
                }
            </React.Fragment>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchPeoplesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        peopleDetailFetching: state.data.peopleDetail.peopleDetailFetching,
        peopleDetail: state.data.peopleDetail.peopleDetail,
        combinedCredit: state.data.peopleDetail.combinedCredit
    };
};

export default connect(mapStateToProps, mapDispatch)(PeopleDetail);


