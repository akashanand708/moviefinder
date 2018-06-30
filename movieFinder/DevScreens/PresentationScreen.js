import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
// Screens
import PopularMovies from './PopularMovies'
import UpcomingMovies from './UpcomingMovies'
import LatestMovies from './LatestMovies'
import NowPlaying from './NowPlaying'
import TopRated from './TopRated'

// Styles
import styles from './Styles/PresentationScreenStyles'
import MovieDetail from '../CommonComponent/MovieItem/MovieDetail';

class PresentationScreen extends React.Component {
  openPopularMovies = () => {
    this.props.navigation.navigate('PopularMovies')
  }

  openUpcomingMovies = () => {
    this.props.navigation.navigate('UpcomingMovies')
  }

  openLatestMovies = () => {
    this.props.navigation.navigate('LatestMovies')
  }

  openNowPlaying = () => {
    this.props.navigation.navigate('NowPlaying')
  }

  openTopRated = () => {
    this.props.navigation.navigate('TopRated')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Movie Finder
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openUpcomingMovies} style={styles.apiButton} image={Images.api} text='Upcoming' />
            <ButtonBox onPress={this.openNowPlaying} style={styles.deviceButton} image={Images.deviceInfo} text='Now Playing' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openPopularMovies} style={styles.componentButton} image={Images.components} text='Most Popular' />
            <ButtonBox onPress={this.openTopRated} style={styles.usageButton} image={Images.faq} text='Top Rated' />
          </View>
        </ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>Made with ❤️ by Infinite Red</Text>
        </View>
      </View>
    )
  }
}

// const PopularMoviesStack = StackNavigator({

// })

export default StackNavigator({
  PresentationScreen: { screen: PresentationScreen },
  PopularMovies: { screen: PopularMovies },
  UpcomingMovies: { screen: UpcomingMovies },
  LatestMovies: { screen: LatestMovies },
  NowPlaying: { screen: NowPlaying },
  TopRated: { screen: TopRated },
  MovieDetail: { screen: MovieDetail }
}, {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f'
    },
    initialRouteName: 'PresentationScreen',
    headerMode: 'none',
    // Keeping this here for future when we can make
    navigationOptions: {
      header: {
        left: (
          <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{ marginHorizontal: 10 }} /></TouchableOpacity>
        ),
        style: {
          backgroundColor: '#3e243f'
        }
      }
    }
  })
