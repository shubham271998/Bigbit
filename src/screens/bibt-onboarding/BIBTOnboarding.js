import React from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ONBOARDING_PAGES} from './BIBITOnboarding-constant';
import {APP_THEME} from '../../theme/appTheme';

import {Star} from '../../assets';

import styles from './BIBTOnBoarding-styles';

const Onboarding = props => {
  const {navigation} = props;

  const renderOnboardingPages = () =>
    ONBOARDING_PAGES.map((onboardingPage, index) => (
      <LinearGradient
        key={onboardingPage.key}
        colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
        style={styles.linearGradient}>
        <Star style={styles.backgroundStar} />
        <View style={styles.onboardingSkip}>
          <Text
            onPress={() => {
              AsyncStorage.setItem('alreadyLaunched', 'true');
              navigation.navigate('Login');
            }}
            style={styles.onboardingSkipText}>
            {index === ONBOARDING_PAGES.length - 1 ? 'Done' : 'Skip'}
          </Text>
        </View>
        <View style={styles.onboardingImageContainer}>
          {onboardingPage.image}
        </View>
        <Text style={styles.onboardingHeading}>{onboardingPage.heading}</Text>
        <Text style={styles.onboardingSubtitle}>{onboardingPage.subTitle}</Text>
      </LinearGradient>
    ));

  return (
    <Swiper
      loop={false}
      style={styles.wrapper}
      activeDot={<View style={styles.onboardingDots} />}>
      {renderOnboardingPages()}
    </Swiper>
  );
};

export default Onboarding;
