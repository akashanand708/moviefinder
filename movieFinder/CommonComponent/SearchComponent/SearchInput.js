
import React from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Item, Input } from 'native-base';
import Colors from '../../DevScreens/DevTheme/Colors';
import style from './style';
import BackButton from '../BackButton';

class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryString: ''
    }
  }

  clearText = () => {
    this.refs.searchInputBox._root.clear();
  }

  render() {
    let { searchType, navigation } = this.props;

    return (
      <View>
        <Header searchBar rounded hasSegment style={style.searchHeader}>
          <Left>
            <BackButton
              navigation={navigation}
            />
          </Left>
          <Body>
            <Item>
              <Icon name="ios-search" style={{ color: Colors.buttonIcon }} />
              <Input
                ref={"searchInputBox"}
                autoFocus={true}
                placeholder={`Search...`}
                returnKeyType='search'
                onSubmitEditing={this.props.fetchSearchResult}
                clearButtonMode="while-editing" />
            </Item>
          </Body>
          <Right>
            <Button transparent onPress={this.clearText}>
              <Icon name="close" style={{ color: Colors.buttonIcon }} />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}
SearchInput.defaultProps = {
  searchType: '',
  fetchSearchResult: null

}

export default SearchInput;