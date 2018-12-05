import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import CommonLoaderStyle from './CommonLoaderStyle'

const CommonLoader = (props) => {
    return (
        <View style={CommonLoaderStyle.loaderContainer}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default CommonLoader;


