import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './BIBTButton-styles';

const BIBTButton = props => {
  const {
    buttonStyles,
    customImage: CustomImage,
    onPress,
    title,
    titleStyles,
  } = props;
  const renderCustomImage = () => (CustomImage ? <CustomImage /> : null);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.defaultButton, buttonStyles]}>
      {renderCustomImage()}
      <Text style={[styles.defaultTitle, titleStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BIBTButton;
