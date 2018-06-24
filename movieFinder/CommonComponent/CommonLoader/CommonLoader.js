import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'native-base';
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity, Animated } from 'react-native'
import CommonLoaderStyle from './CommonLoaderStyle'
class CommonLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { } = this.props;
        let { } = this.state;
        return (
            <View style={CommonLoaderStyle.loaderContainer}>
                <Spinner />
            </View>
        )
    }
}
CommonLoader.propTypes = {
    //movieItem: PropTypes.object
}
export default CommonLoader;


