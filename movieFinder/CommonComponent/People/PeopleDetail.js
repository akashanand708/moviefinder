import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native'
import ViewMoreText from 'react-native-view-more-text';
import style from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchPeoplesActions from '../../../App/Actions/fetchPeopleActions'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SuperGridSectionListCustom from '../SuperGridSectionListCustom';
import MovieItem from '../MovieItem/MovieItem';
import Constants from '../../../App/Constants/Constants';
import People from './People';


const PROFILE_PIC_URL = Constants.POSTER_BASE_URL;
class PeopleDetail extends Component {

    componentDidMount() {
        let { peopleId } = this.props.navigation.state.params;
        this.props.actions.fetchPeopleDetail(peopleId);
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
    render() {
        let { peopleDetail, peopleDetailFetching } = this.props;

        let moviesList = _.get(peopleDetail, 'combined_credits.cast', []);
        let profilePics = _.get(this.props, 'peopleDetail.images.profiles', []);
        let { instagram_id, facebook_id, twitter_id } = _.get(peopleDetail, 'external_ids', {})
        let staticDimension = 110,
            gridHeight = { height: 185 },
            spacing = 1;
        console.log("People detail...", peopleDetail);
        return (
            <React.Fragment>
                {
                    !_.isEmpty(peopleDetail) ?
                        (<ScrollView style={[style.mainContainer, style.peopleDetailMain]}>
                            <View style={style.peopleImageMain}>
                                <People
                                    people={peopleDetail}
                                    type="people"
                                    isOpenLightBox={false}
                                    showName={false}
                                    imageType={Constants.IMAGE_TYPE.BACKDROPS}
                                    images={[]}
                                    navigation={this.props.navigation}
                                >
                                    <View style={[style.socialMedia]}>
                                        {
                                            !_.isEmpty(instagram_id) &&
                                            <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${instagram_id}`)}>
                                                <Icon name="instagram" size={30} style={style.socialMediaIcon} />
                                            </TouchableOpacity>
                                        }
                                        {
                                            !_.isEmpty(facebook_id) &&
                                            <TouchableOpacity onPress={() => Linking.openURL(`https://www.facebook.com/${facebook_id}`)}>
                                                <Icon name="facebook-square" size={30} style={style.socialMediaIcon} />
                                            </TouchableOpacity>
                                        }
                                        {
                                            !_.isEmpty(twitter_id) &&
                                            <TouchableOpacity onPress={() => Linking.openURL(`https://twitter.com/${twitter_id}`)}>
                                                <Icon name="twitter" size={30} style={style.socialMediaIcon} />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </People>
                            </View>
                            <View style={[style.biography]}>
                                <Text style={[style.profilePic, style.infoTitle]}>Biography</Text>
                                <ViewMoreText
                                    numberOfLines={3}
                                    renderViewMore={this.renderViewMore}
                                    renderViewLess={this.renderViewLess}
                                >
                                    <Text style={[style.infoSubtitle]}>
                                        {peopleDetail.biography ? peopleDetail.biography : '-'}
                                    </Text>
                                </ViewMoreText>
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
                                    //navigation={this.props.navigation}
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
                                    //navigation={this.props.navigation}
                                    moviesFetching={false}
                                />
                            </View>
                            <View style={[style.alignColumnLeft, style.personalInfoMain]}>
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
                                    {peopleDetail.homepage ?
                                        <Text style={[style.infoSubtitle, style.underLine]} onPress={() => Linking.openURL(peopleDetail.homepage)}>{peopleDetail.homepage}</Text>
                                        :
                                        <Text style={[style.infoSubtitle]}>
                                            {'-'}
                                        </Text>
                                    }

                                </View>
                                <View style={[style.commonMargin]}>
                                    <Text style={[style.infoTitle]}></Text>
                                    <Text style={[style.infoSubtitle]}>

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
        peopleDetail: state.data.peopleDetail.peopleDetail
    };
};

export default connect(mapStateToProps, mapDispatch)(PeopleDetail);


