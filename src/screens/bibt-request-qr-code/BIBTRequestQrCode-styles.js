import {StyleSheet} from 'react-native';

import {heightPercent, widthPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  historyContainer: {
    height: heightPercent(35),
    marginBottom: heightPercent(5),
  },
  middleContainer: {
    alignItems: 'center',
    backgroundColor: palette.light_black,
    borderRadius: 10,
    flexDirection: 'row',
    height: heightPercent(10),
    justifyContent: 'space-around',
    marginBottom: heightPercent(3),
    marginTop: heightPercent(3),
    width: widthPercent(90),
  },

  imageContainer: {
    marginTop: heightPercent(5),
  },

  innerContainer: {
    height: heightPercent(5),
  },

  addressText: {
    color: palette.white,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 15,
  },

  codeText: {
    color: palette.white,
    lineHeight: 40,
  },

  cardStyles: {
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    height: heightPercent(10),
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 0,
    padding: 15,
    width: widthPercent(90),
  },

  headerStyles: {
    fontSize: 15,
    marginLeft: 30,
  },

  footerStyles: {
    fontSize: 13,
    marginLeft: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercent(90),
  },

  buttonStyles: {
    alignItems: 'center',
    backgroundColor: palette.lighter_purple,
    borderWidth: 0,
    height: 60,
    justifyContent: 'center',
    marginTop: 0,
    width: '75%',
  },

  titleStyles: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  download: {
    alignItems: 'center',
    backgroundColor: palette.lighter_purple,
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
});

export default styles;
