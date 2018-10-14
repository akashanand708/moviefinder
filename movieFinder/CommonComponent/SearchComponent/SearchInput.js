
import React from 'react';
import { View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Item, Input, Text } from 'native-base';
import Colors from '../../DevScreens/DevTheme/Colors';

class SearchInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryString: ''
    }
  }
  componentDidMount() {
    this.refs.searchInputBox._root.focus();
  }


  render() {
    let { searchType } = this.props;

    return (
      <View>
        <Header searchBar rounded hasSegment>
          <Left>
            {/* <BackButton
              goBack={this.goBack}
              style={{}}
            /> */}
          </Left>
          <Body>
            <Item>
              <Icon name="ios-search" style={{ color: Colors.buttonIcon }} />
              <Input ref={"searchInputBox"} placeholder={`Search ${searchType}...`} />
            </Item>
          </Body>
          <Right>
            <Button transparent onPress={this.props.fetchSearchResult}>
              <Icon name="ios-search" style={{ color: Colors.buttonIcon, fontSize: 35 }} />
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