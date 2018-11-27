
import React from 'react';
import { View, Picker } from 'react-native';
import { Button, ActionSheet, Icon, Item, } from "native-base";
import colors from '../../DevScreens/DevTheme/Colors';
import style from './style';
import BackButton from '../BackButton';
import CountryCode from '../../../App/Constants/CountryCode';
import CountryComponent from './CountryComponent';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import { CustomToast } from '../CommonToast/CommonToast';
// import CountryComponent from './CountryComponent';


var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
// var CountryComponent = CountryCode.COUNTRY_CODE.map((item, index) => {
//   return <View key={item.country_id}>
//     <Flag
//       code={item.country_id}
//       size={32}
//     />

//   </View>
// })
class FilterComponent extends React.PureComponent {


  onValueChange = (itemValue, itemIndex) =>{
    this.props.actions.setFilterCountry(itemValue);
    CustomToast.showToast("Please, refresh after selecting country.", 'info');
  }
  renderPicketItem = () => {
    return CountryCode.COUNTRY_CODE.map((item, index) => {
      return <Picker.Item key={item.country_id} label={item.text} value={item.country_id} />
    })
  }
  render() {
    let { selectedCountry } = this.props;
    console.log("Selected country.....", selectedCountry);
    return (
      // <Button
      //   onPress={() =>
      //     ActionSheet.show(
      //       {
      //         options: CountryCode.COUNTRY_CODE,
      //         cancelButtonIndex: CANCEL_INDEX,
      //         destructiveButtonIndex: DESTRUCTIVE_INDEX,
      //         title: "Testing ActionSheet"
      //       },
      //       buttonIndex => {
      //         console.log("SELECTED COUNTRY...", CountryCode.COUNTRY_CODE[buttonIndex]);
      //         // this.setState({ clicked: CountryCode.COUNTRY_CODE[buttonIndex] });
      //       }
      //     )}
      // >
      //   <Icon type="FontAwesome" name="filter" style={{ color: colors.buttonIcon }} />
      // </Button>

      <Item picker>
        <Picker
          mode='dialog'
          selectedValue={selectedCountry}
          style={{ width: '100%' }}
          onValueChange={(itemValue, itemIndex) => { setTimeout(() => {this.onValueChange(itemValue, itemIndex)}, 10)}}>
          {
            this.renderPicketItem()
          }
        </Picker>
      </Item>

    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.ui.filterCountry.selected_country,

  };
};
export default connect(mapStateToProps, mapDispatch)(FilterComponent);