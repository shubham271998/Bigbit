import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  defaultButton: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    padding: 20,
  },

  defaultTitle: {
    color: palette.white,
  },
});
export default styles;
