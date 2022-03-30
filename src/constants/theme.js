import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  darkGreen: '#229879',
  darkLime: '#1A8871',
  lightLime: '#BBD6C5',
  lime: '#2AD699',
  lightGreen: '#E7F9EF',
  lightGreen1: '#8EbCA0',

  white: '#fff',
  white2: '#F9F9F9',
  black: '#020202',
  black2: '#121111',
  blue: '#4096FE',
  gray: '#777777',
  gray2: '#F8F8F8',
  lightGray: '#F5F6FB',
  lightGray2: '#757575',

  red: '#eb5476',
  bblue: '#f2f5fc',
  byellow: '#B08F30',
  hyperLink: '#388EC8',

  transparentBlack1: 'rgba(2, 2, 2, 0.1)',
  transparentBlack3: 'rgba(2, 2, 2, 0.3)',
  transparentBlack5: 'rgba(2, 2, 2, 0.5)',
  transparentBlack7: 'rgba(2, 2, 2, 0.7)',
  transparentBlack9: 'rgba(2, 2, 2, 0.9)',

  transparentGray: 'rgba(77,77,77, 0.8)',
  transparentDarkGray: 'rgba(20,20,20, 0.9)',

  transparent: 'transparent',
};

export const FONTS = {
  title: {fontFamily: 'Myriad-Pro-Semibold'},
  text: {fontFamily: 'FUTURAM'},
  text1: {fontFamily: 'futura-book-bt'},
};

export const SIZES = {
  height,
  width,
};

const appTheme = {COLORS, FONTS, SIZES};

export default appTheme;
