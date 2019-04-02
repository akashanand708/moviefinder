
import React from 'react';
import { Picker } from 'react-native';
import { Item } from "native-base";
import CountryCode from '../../../App/Constants/CountryCode';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import { CustomToast } from '../CommonToast/CommonToast';


class FilterComponent extends React.PureComponent {


  onValueChange = (itemValue, itemIndex) => {
    this.props.actions.setFilterCountry(itemValue);
    this.props.onRefresh(itemValue, 'onchange');
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
      <Item picker>
        <Picker
          mode='dialog'
          selectedValue={selectedCountry}
          style={{ width: '100%' }}
          // TODO onValueChange={(itemValue, itemIndex) => { setTimeout(() => { this.onValueChange(itemValue, itemIndex) }, 10) }}>
          onValueChange={(itemValue, itemIndex) => this.onValueChange(itemValue, itemIndex)}>
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