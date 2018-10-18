// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Images } from '../DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../Styles/DeviceInfoScreenStyles'
import Constants from '../../../App/Constants/Constants';
import { Colors } from '../DevTheme';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchTvshowsActions from '../../../App/Actions/fetchTvActions'
import RenderTvshowItem from '../../CommonComponent/TvshowItem/RenderTvshowItem';

class HorizontalTvshowList extends React.Component {

  render() {
    let { tvshowType, title } = this.props;
    return (
      <View style={styles.mainHorizontalContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <TouchableOpacity onPress={() => this.props.navigate(tvshowType, title)}><Text style={styles.headerText} >See all</Text></TouchableOpacity>
        </View>
        <View style={styles.movieListContainer}>
          <RenderTvshowItem
            tvshowType={tvshowType}
            navigation={this.props.navigation}
            horizontal={true}
          />
        </View>
      </View >
    )
  }
}


const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchTvshowsActions, dispatch),
  };
};

export default connect(null, mapDispatch)(HorizontalTvshowList);
