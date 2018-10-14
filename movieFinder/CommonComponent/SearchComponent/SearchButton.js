
import React from 'react';
import { Icon, Header, Left, Body, Right, Item, Input, } from 'native-base';
import { View, TouchableOpacity, Button } from 'react-native';
import style from './style';
import colors from '../../DevScreens/DevTheme/Colors';

const SearchButton = (props) => {
  navigateToSearch = (searchType) => {
    props.navigation.navigate({
      key: searchType,
      routeName: 'SearchComponent',
      params: { searchType: searchType }
    })
  }
  let { searchType } = props;
  return (
    <View style={style.searchButtonMain}>
      <Header searchBar rounded hasSegment>
        <Left>
        </Left>
        <Body>
          <Item>
            <Icon name="ios-search" style={{ color: colors.buttonIcon }} />
            <Input editable={false} placeholder={`Search ${searchType}...`} />
          </Item>
        </Body>
        <Right>
        </Right>
      </Header>
      <TouchableOpacity style={style.searchButton} onPress={() => this.navigateToSearch(searchType)} />
    </View>
  );
}
SearchButton.defaultProps = {

}
export default SearchButton;