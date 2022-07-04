import {StyleSheet} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.satin_deep_black_light,
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  buttonBackground: {backgroundColor: palette.light_grey},

  container: {justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'},

  title: {fontWeight: 'bold', color: 'white'},
});
export default styles;
