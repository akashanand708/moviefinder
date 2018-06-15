// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'


export default class PopularMovies extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Image source={Images.deviceInfo} style={styles.logo} />
            <Text style={styles.titleText}>Popular Movies</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              Popular Movies
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
