import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../Styles/DeviceInfoScreenStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchTvshowsActions from '../../../App/Actions/fetchTvActions'
import RenderTvshowItem from '../../CommonComponent/TvshowItem/RenderTvshowItem';

const HorizontalTvshowList = (props) => {

  let { tvshowType, title } = props;
  return (
    <View style={styles.mainHorizontalContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={() => props.navigate(tvshowType, title)}><Text style={styles.headerText} >See all</Text></TouchableOpacity>
      </View>
      <View style={styles.movieListContainer}>
        <RenderTvshowItem
          tvshowType={tvshowType}
          navigation={props.navigation}
          horizontal={true}
        />
      </View>
    </View >
  )
}


const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchTvshowsActions, dispatch),
  };
};

export default connect(null, mapDispatch)(HorizontalTvshowList);
