import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

const styles = StyleSheet.create({
  loader: {
    height: heightPercent(100),
    justifyContent: 'center',
    width: widthPercent(100),
    zIndex: 3,
  },
});

export default styles;
