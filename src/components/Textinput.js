import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';

import {SIZES, COLORS, FONTS} from '../constants';

const Textinput = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  text,
  validText,
  keyboardType,
}) => {
  return (
    <View style={{}}>
      {text?.length > 0 && <Text style={styles.text}>{text}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.inputStyle, {...FONTS.title}]}
        numberOfLines={1}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.black2}
      />
      {validText?.length > 0 && (
        <Text style={styles.errorMsg}>{validText}</Text>
      )}
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 0.5,
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.7,
    //borderWidth: 1,
    //borderRadius: 5,
    fontSize: 18,
    color: COLORS.black,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
    marginTop: 10,
    marginLeft: 2,
  },
  errorMsg: {
    fontSize: 13,
    color: 'red',
    textAlign: 'left',
  },
});
