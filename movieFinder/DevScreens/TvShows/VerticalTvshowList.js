import React from 'react'
import { View } from 'react-native'
import styles from '../Styles/DeviceInfoScreenStyles'
import Constants from '../../../App/Constants/Constants';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchTvshowsActions from '../../../App/Actions/fetchTvActions'
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';
import RenderTvshowItem from '../../CommonComponent/TvshowItem/RenderTvshowItem';

class VerticalTvshowList extends React.Component {

  goBack = () => {
    this.props.navigation.pop();
    this.props.actions.backAction();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    let { tvshowType } = this.props.navigation.state.params;
    return (
      <View style={styles.mainContainer}>
        <SearchButton
          searchType={Constants.TVSHOWS}
          navigation={this.props.navigation}
          horizontal={false}
        />
        <View style={styles.verticalListContainer}>
          <RenderTvshowItem
            tvshowType={tvshowType}
            navigation={this.props.navigation}
            horizontal={false}
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

export default connect(null, mapDispatch)(VerticalTvshowList);
