import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import RenderReviews from './RenderReviews';

class UserReviews extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={[style.mainHorizontalContainer, { paddingTop: 20, paddingLeft: 5 }]}>
                <View style={style.header}>
                    <Text style={style.headerText}>Reviews</Text>
                </View>
                <View style={style.movieListContainer}>
                    <RenderReviews
                        navigation={this.props.navigation}
                        horizontal={true}
                    />
                </View>
            </View >
        );
    }
}
export default UserReviews;