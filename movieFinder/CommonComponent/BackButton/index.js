import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'native-base';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './style';
import Colors from '../../DevScreens/DevTheme/Colors';

const BackButton = (props) => {
  return (
    <View style={[props.style, style.commonBoxShadow]}>
      <Button transparent onPress={() => props.navigation.goBack()}>
        <Icon name="arrow-back" style={{ color: Colors.buttonIcon, fontSize: 35 }} />
      </Button>
    </View>
    // <Button onPress={props.goBack} style={[props.style, style.backArrow]}>
    //   <Icon name="arrow-left" size={30} style={{ color: Colors.playButton }} />
    // </Button>
  );
}
export default BackButton;