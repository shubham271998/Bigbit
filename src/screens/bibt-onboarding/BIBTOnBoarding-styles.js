import {StyleSheet, Platform} from 'react-native';

import palette from '../../theme/palette';

const styles = StyleSheet.create({
  slide1: {
    alignItems: 'center',
    backgroundColor: palette.jodhpur_blue,
    flex: 1,
    justifyContent: 'center',
  },
  slide2: {
    alignItems: 'center',
    backgroundColor: palette.medical_mask,
    flex: 1,
    justifyContent: 'center',
  },
  slide3: {
    alignItems: 'center',
    backgroundColor: palette.manakin,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: palette.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
  },
  onboardingDots: {
    backgroundColor: palette.brain_freeze,
    borderRadius: 4,
    height: 8,
    margin: 3,
    width: 8,
  },
  backgroundStar: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  onboardingHeading: {
    // fontFamily: 'SFPRODISPLAYBOLD',
    color: palette.lightning_yellow,
    fontSize: 22,
    textAlign: 'center',
  },
  onboardingSubtitle: {
    // fontFamily: 'SFPRODISPLAYREGULAR',
    color: palette.white,
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  onboardingImageContainer: {
    alignItems: 'center',
    flex: 0.7,
    justifyContent: 'center',
  },
  onboardingSkip: {
    color: palette.blue_violet,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
  },
  onboardingSkipText: {
    color: palette.blue_violet,
    fontWeight: 'bold',
  },
});

export default styles;
