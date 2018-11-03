
import React from 'react';
import { Icon, Header, Left, Body, Right, Item, Input, } from 'native-base';
import { View, TouchableOpacity, Button } from 'react-native';
import style from './style';
import colors from '../../DevScreens/DevTheme/Colors';
import BackButton from '../BackButton';
import Constants from '../../../App/Constants/Constants';

const SearchButton = (props) => {
  navigateToSearch = (searchType) => {
    props.navigation.navigate({
      key: searchType,
      routeName: 'SearchComponent',
      params: { searchType: searchType }
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
          <Item>
            <Icon name="ios-search" style={{ color: colors.buttonIcon }} />
            <Input editable={false} placeholder={`Search...`} />
          </Item>
          <TouchableOpacity style={style.searchButton} onPress={() => this.navigateToSearch(searchType)} />
        </Body>
        <Right>
        </Right>
      </Header>
    </View>
  );
}
SearchButton.defaultProps = {

}
export default SearchButton;