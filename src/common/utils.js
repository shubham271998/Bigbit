import {Alert} from 'react-native';
import validator from 'validator';

import {WIDTH, HEIGHT} from './constant';

export const widthPercent = percentage => (WIDTH / 100) * percentage;
export const heightPercent = percentage => (HEIGHT / 100) * percentage;

export const validation = (phoneNo, email, name) => {
  if (name.length >= 3 && phoneNo.length >= 10 && phoneNo.length <= 15) {
    if (validator.isEmail(email)) {
      return true;
    } else {
      Alert.alert('Invalid Email.');
    }
  } else {
    Alert.alert('Please enter correct details.');
  }
  return false;
};
