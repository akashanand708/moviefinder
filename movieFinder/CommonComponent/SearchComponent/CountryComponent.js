
import React from 'react';
import { View } from 'react-native';
import { Button, ActionSheet, Icon, Item, Picker } from "native-base";
import style from './style';
import BackButton from '../BackButton';
import CountryCode from '../../../App/Constants/CountryCode';


const CountryComponent = (props) => {
  return CountryCode.COUNTRY_CODE.map((item, index) => {
    return <Picker.Item label={item.text} value={item.country_id} />
  })
}

export default CountryComponent;