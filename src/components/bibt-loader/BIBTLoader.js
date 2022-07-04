import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import palette from '../../theme/palette';

import styles from './BIBTLoader-styles';

function Loader() {
  return (
    <LinearGradient
      colors={[palette.tiffany_blue, palette.blue_violet]}
      style={styles.linearGradient}>
      <ActivityIndicator
        color={palette.persian_indigo}
        size="large"
        hidesWhenStopped={true}
      />
    </LinearGradient>
  );
}

export default Loader;
