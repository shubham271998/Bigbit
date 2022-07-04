import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ANIMATION = [
  'bounceInLeft',
  'bounceInRight',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInUp',
  'lightSpeedIn',
  'slideInDown',
  'slideInUp',
  'slideInLeft',
  'zoomIn',
  'zoomInDown',
];

export {WIDTH, HEIGHT, ANIMATION};
