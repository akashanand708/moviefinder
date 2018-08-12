import React, { Component } from 'react'
import { View } from 'react-native'
import {
    AdMobBanner,
    AdMobRewarded,
    AdMobInterstitial,
    PublisherBanner,
} from 'react-native-admob';
import style from './AdvertisementBannerStyle'

export default class AdvertisementBanner extends Component {
    constructor(props) {
        super(props)
    }

    bannerErrorHandler = (e) => {
        console.log(e);
    }
    render() {
        return (
            <View>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-7021272264047080/8588748681"
                    // adUnitID="ca-app-pub-3940256099942544/6300978111"
                    onAdFailedToLoad={this.bannerErrorHandler}
                    ref={el => (this._basicExample = el)}
                    testDevices={[AdMobBanner.simulatorId]}
                    //style={style.adContainer}
                />
            </View>
        )
    }
}
