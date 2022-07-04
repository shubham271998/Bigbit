import React from 'react';
import {TextInput, View} from 'react-native';

import palette from '../../theme/palette';

import {Check} from '../../assets';

import styles from './BIBTInput-styles';

const BIBTInput = props => {
  const {
    checkIcon,
    errorBox,
    icon: Icon,
    setCheckIcon,
    setValue,
    title,
    type,
    value,
  } = props;

  const validator = require('validator');
  const namePattern = /^[a-zA-Z][a-zA-Z\s]+$/;
  const renderImage = () => (Icon ? <Icon style={styles.iconStyle} /> : null);

  const setText = text => {
    setValue(text);
  };
  const renderCheckIcon = () => {
    if (type === 'phone') {
      if (
        value.length >= 10 &&
        value.length <= 15 &&
        !isNaN(value) &&
        value[0] !== '-'
      ) {
        setCheckIcon(true);
      } else {
        setCheckIcon(false);
      }
    } else if (type === 'email') {
      if (validator.isEmail(value)) {
        setCheckIcon(true);
      } else {
        setCheckIcon(false);
      }
    } else if (type === 'name') {
      if (namePattern.test(value) && value.length >= 3) {
        setCheckIcon(true);
      } else {
        setCheckIcon(false);
      }
    }
    if (checkIcon) {
      return <Check style={styles.checkIcon} />;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {renderImage()}
      <TextInput
        autoCapitalize="none"
        keyboardType={type === 'phone' ? 'number-pad' : 'default'}
        maxLength={type === 'phone' ? 15 : 25}
        onChangeText={setText}
        placeholder={title}
        placeholderTextColor={palette.white}
        style={[styles.inputField, errorBox && styles.errorBoxStyle]}
      />
      {renderCheckIcon()}
    </View>
  );
};

export default BIBTInput;
