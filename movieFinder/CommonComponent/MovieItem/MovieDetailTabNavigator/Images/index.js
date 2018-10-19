import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import style from './style';
import Constants from '../../../../../App/Constants/Constants';
import RenderImages from './RenderImages';

class Images extends React.Component {
    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <ScrollView>
                <View style={style.mainHorizontalContainer}>
                    <View style={style.header}>
                        <Text style={style.headerText}>Backdrops</Text>
                    </View>
                    <View style={style.movieListContainer}>
                        <RenderImages
                            imageType={Constants.IMAGE_TYPE.BACKDROPS}
                            navigation={this.props.navigation}
                            horizontal={true}
                        />
                    </View>
                </View >

                <View style={style.mainHorizontalContainer}>
                    <View style={style.header}>
                        <Text style={style.headerText}>Posters</Text>
                    </View>
                    <View style={style.movieListContainer}>
                        <RenderImages
                            imageType={Constants.IMAGE_TYPE.POSTERS}
                            navigation={this.props.navigation}
                            horizontal={true}
                        />
                    </View>
                </View >
            </ScrollView>
        );
    }
}

export default Images;