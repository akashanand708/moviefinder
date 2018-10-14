import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import { ROUTE_NAME } from '../../../../../App/Constants/RouteNameConstant';

class Info extends React.Component {
    // navigate = (movieType, title) => {
    //     this.props.navigation.navigate('NetworkError');
    //     let { connectionType } = this.props;
    //     if (['none', 'unknown'].includes(connectionType)) {
    //         this.props.navigation.navigate('NetworkError');
    //     } else {
    //         this.props.navigation.navigate({
    //             key: movieType,
    //             routeName: 'VerticalMovieList',
    //             params: { movieType: movieType, title: title }
    //         })

    //     }
    // }
    // static navigationOptions = {
    //     header: null
    // };
    render() {
        console.log("MOVIE RENDER......");
        return (
            // <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={style.linearGradient}>
            //     <ScrollView>
            //         <View style={style.container}>
            //             {/* <HorizontalMovieList title={Constants.TITLE.POPULAR} movieType={Constants.POPULAR_MOVIES} navigation={this.props.navigation} navigate={this.navigate} /> */}
            //            <Text>Info</Text>
            //         </View>
            //     </ScrollView>
            // </LinearGradient>
            <View style={style.container}>
                {/* <HorizontalMovieList title={Constants.TITLE.POPULAR} movieType={Constants.POPULAR_MOVIES} navigation={this.props.navigation} navigate={this.navigate} /> */}
                <Text>Info</Text>
            </View>
        );
    }
}
export default Info;