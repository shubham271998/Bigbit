import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {logIn} from '../../redux/reducers/auth';

import {BIBTOtpPin} from '../../components';

import {APP_THEME} from '../../theme/appTheme';

import {Avatar} from '../../assets';

import styles from './BIBTCreateLogin-styles';

const BIBTCreateLogin = () => {
  const dispatch = useDispatch();
  const getPin = value => {
    value.length === 6 ? dispatch(logIn()) : ' ';
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.mainContainer}>
      <Avatar style={styles.avatar} />
      <TouchableOpacity>
        <Text style={styles.yellowText}>Create Login</Text>
      </TouchableOpacity>
      <Text style={styles.generateText}>Generate your password to login</Text>
      <Text style={styles.protectText}>and protect your account</Text>
      <View style={styles.pinContainer}>
        <BIBTOtpPin textBoxStyles={styles.pinStyle} getPin={getPin} />
      </View>
      <Text style={styles.touchIdText}>Or create Touch ID login</Text>
    </LinearGradient>
  );
};

export default BIBTCreateLogin;
