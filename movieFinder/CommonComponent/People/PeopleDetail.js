import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Fonts } from '../../../App/Themes'
import * as fetchPeoplesActions from '../../../App/Actions/fetchPeopleActions'
// import Poster from './Poster';
import { Colors } from '../../DevScreens/DevTheme';
// import PeopleDetailTabNavigator from './PeopleDetailTabNavigator/PeopleDetailTabNavigator';
// import PeopleDetailHeader from './PeopleDetailHeader';
class PeopleDetail extends Component {

    componentDidMount() {
        let { peopleId } = this.props.navigation.state.params;
        this.props.actions.fetchPeopleDetail(peopleId);
    }
    componentWillUnmount() {
       // this.props.actions.resetPeopleDetailState();
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
    render() {
        let { peopleDetail, peopleDetailFetching } = this.props;
        let { peopleId,peopleName } = this.props.navigation.state.params;
        console.log("People detail...",peopleDetail);
        return (
            <View style={style.mainContainer}>
            <Text>People details</Text>
                {/* {
                    peopleDetail && !peopleDetailFetching &&
                    <PeopleDetailHeader
                        goBack={this.goBack}
                        navigation={this.props.navigation}
                        movieOrTvshow={movieOrTvshow}
                    />
                }
                {
                    peopleDetail && !peopleDetailFetching &&
                    <PeopleDetailTabNavigator
                        screenProps={{movieOrTvshow}}
                    />
                } */}
                <ActivityIndicator animating={peopleDetailFetching} size="large" />
            </View>
        )
    }
}
PeopleDetail.propTypes = {
    //peopleDetail: PropTypes.object
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
    };
};

export default connect(mapStateToProps, mapDispatch)(PeopleDetail);


