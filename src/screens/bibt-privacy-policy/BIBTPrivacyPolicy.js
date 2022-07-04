import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {BIBTButton} from '../../components';
import {logIn} from '../../redux/reducers/auth';

import {
  POLICY_TEXT,
  POLICY_TYPE,
  POLICY_VALUE,
  POLICY_BUTTON,
} from './BIBTPrivacyPolicy-constant';
import {APP_THEME} from '../../theme/appTheme';

import {Policy} from '../../assets';

import {styles} from './BIBTPrivacyPolicy-styles';

const BIBTPrivacyPolicy = () => {
  const dispatch = useDispatch();
  const clickHandle = () => dispatch(logIn());

  const policyType = () =>
    POLICY_TYPE.map((type, index) => (
      <Text style={styles.propertyText} key={`key-${index}`}>
        {type}
      </Text>
    ));

  const policyValue = () =>
    POLICY_VALUE.map((value, index) => (
      <Text style={styles.valueText} key={`key-${index}`}>
        {value}
      </Text>
    ));

  const policyButton = () =>
    POLICY_BUTTON.map((data, index) => {
      const {title} = data;

      const changeColor = index === 1 ? styles.button2 : null;

      return (
        <BIBTButton
          title={title}
          buttonStyles={[styles.button, changeColor]}
          titleStyles={styles.buttonText}
          onPress={clickHandle}
          key={`key-${index}`}
        />
      );
    });

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <ScrollView>
        <View style={styles.buttonContainer}>{policyButton()}</View>
        <View style={styles.image}>
          <Policy />
        </View>
        <Text style={styles.policyText}>{POLICY_TEXT}</Text>
        <View style={styles.policyDetails}>
          <View>{policyType()}</View>
          <View>{policyValue()}</View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BIBTPrivacyPolicy;
