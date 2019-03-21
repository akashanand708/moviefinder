
import React from 'react';
import { Icon, Header, Left, Body, Right } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import style from './style';
import colors from '../../DevScreens/DevTheme/Colors';
import BackButton from '../BackButton';
import Constants from '../../../App/Constants/Constants';
import FilterComponent from './FilterComponent';

const SearchButton = (props) => {
  navigateToSearch = (searchType) => {
    props.navigation.push('SearchComponent', {
      searchType: searchType
    })
  }



  let { searchType, horizontal } = props;
  return (
    <View style={style.searchButtonMain}>
      <Header searchBar rounded hasSegment style={style.searchHeader}>
        <Left>
          {
            !horizontal &&
            <BackButton
              navigation={props.navigation}
              style={{}}
            />
          }
        </Left>
        <Body>
          {
            searchType === Constants.MOVIE &&
            <FilterComponent />
          }
        </Body>
        <Right>
          <TouchableOpacity style={style.searchButton} onPress={() => this.navigateToSearch(searchType)} >
            <Icon name="ios-search" style={{ color: colors.buttonIcon }} />
          </TouchableOpacity>
        </Right>
      </Header>
    </View>
  );
}
SearchButton.defaultProps = {

}
export default SearchButton;