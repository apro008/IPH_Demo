import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {SIZES, COLORS} from '../constants';

const Button = ({onPress, propStyle, name, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, {...propStyle}]}>
      <Text style={[styles.textStyle, {...textStyle}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    //flexDirection: 'row',
    height: SIZES.height / 16,
    width: SIZES.width * 0.32,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    //fontWeight: 'bold',
  },
});
