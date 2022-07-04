import {StyleSheet, Platform} from 'react-native';

import {widthPercent, heightPercent} from '../../common/utils';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },

  linearGradient: {
    flex: 1,
  },

  customOptionsContainer: {
    borderBottomColor: palette.opaque_white,
    borderBottomWidth: 1,
  },

  outerOptionsContainer: {
    backgroundColor: palette.blue_violet,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    maxHeight: heightPercent(38),
    marginTop: 22,
    paddingVertical: 15,
    width: Platform.OS === 'ios' ? '90%' : '100%',
  },

  selectBoxStyle: {
    height: heightPercent(6.7),
    width: widthPercent(90),
  },

  errorContainer: {
    width: widthPercent(90),
    justifyContent: 'flex-start',
  },
  errorMessage: {
    color: palette.watermelon,
  },
  errorStyle: {
    borderWidth: 2,
    borderColor: palette.watermelon,
  },
  buttonStyles: {
    alignItems: 'center',
    borderWidth: 0,
    height: 56,
    justifyContent: 'center',
    marginTop: 0,
    width: '80%',
    padding: 10,
  },

  titleStyles: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  welcomeText: {
    color: palette.persian_indigo,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },

  bigText: {
    fontSize: 30,
  },

  bitText: {
    fontSize: 25,
  },

  titleContainer: {
    width: widthPercent(90),
    justifyContent: 'flex-start',
  },
  bigBitContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  nationalText: {
    fontWeight: 'bold',
    marginTop: 20,
  },

  nationalPhoneContainer: {
    width: widthPercent(90),
  },

  checkIcon: {
    marginLeft: widthPercent(82),
    marginTop: 27,
    position: 'absolute',
  },

  heading: {
    marginTop: 20,
  },

  bigBitImage: {
    marginTop: 40,
  },

  numberText: {
    fontWeight: 'bold',
    marginTop: 20,
  },

  numberField: {
    backgroundColor: palette.opacity_white,
    borderRadius: 10,
    color: palette.white,
    fontSize: 15,
    height: heightPercent(7),
    marginTop: 10,
    paddingHorizontal: 60,
    paddingVertical: 10,
    width: widthPercent(90),
  },

  numberContainer: {
    flexDirection: 'row',
  },

  codeText: {
    color: palette.white,
    fontSize: 15,
    marginLeft: 10,
    marginTop: Platform.OS === 'ios' ? 31 : 26,
    position: 'absolute',
    zIndex: 1,
  },

  flexContainer: {
    flexDirection: 'row',
  },

  imageContainer: {
    alignItems: 'center',
    backgroundColor: palette.persian_indigo,
    borderRadius: 10,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },

  whiteText: {
    color: palette.white,
  },

  buttonContainer: {
    justifyContent: 'space-between',
    marginTop: 50,
    width: Platform.OS === 'ios' ? '90%' : '100%',
  },

  footerContainer: {
    marginTop: 20,
  },

  getStartedText: {
    color: palette.brain_freeze,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  newUserText: {
    fontSize: 15,
  },
});

export default styles;
