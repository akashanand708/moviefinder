import '../Config'
import React, { Component } from 'react'
import { Root, View } from "native-base"
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import store from '../Redux/Store'
import codePush from "react-native-code-push";

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <RootContainer />
          <View/>
        </Root>
      </Provider>
    )
  }
}

export default codePush(codePushOptions)(App);