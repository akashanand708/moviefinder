import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import { ROUTE_NAME } from '../../../../../App/Constants/RouteNameConstant';
import RenderCast from './RenderCast';

class Cast extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={{ paddingTop: 20 }}>
                    <View style={style.mainHorizontalContainer}>
                        <View style={style.header}>
                            <Text style={style.headerText}>Cast</Text>
                        </View>
                        <View style={style.movieListContainer}>
                            <RenderCast
                                castCrewType={Constants.CAST_CREW.CAST}
                                navigation={this.props.navigation}
                                horizontal={true}
                            />
                        </View>
                    </View >

                    <View style={style.mainHorizontalContainer}>
                        <View style={style.header}>
                            <Text style={style.headerText}>Crew</Text>
                        </View>
                        <View style={style.movieListContainer}>
                            <RenderCast
                                castCrewType={Constants.CAST_CREW.CREW}
                                navigation={this.props.navigation}
                                horizontal={true}
                            />
                        </View>
                    </View >
                </View>
            </ScrollView>
        );
    }
}
export default Cast;