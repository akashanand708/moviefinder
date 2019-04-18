import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';
import style from './style';
import Colors from '../../DevScreens/DevTheme/Colors';

const BackButton = (props) => {
  return (
    <View style={[props.style, style.commonBoxShadow]}>
      <Button transparent onPress={() => props.navigation.pop()}>
        <Icon name="arrow-back" style={{ color: Colors.buttonIcon, fontSize: 26 }} />
      </Button>
    </View>
  );
}
export default BackButton;