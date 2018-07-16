import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './Styles/ButtonBoxStyles'

export default class ButtonBox extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        <Icon name={this.props.iconName} size={30} style={this.props.iconStyle} />
        <Text style={styles.label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
