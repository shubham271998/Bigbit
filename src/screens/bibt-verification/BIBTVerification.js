import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {BIBTButton, BIBTOtpPin} from '../../components';

import {APP_THEME} from '../../theme/appTheme';

import styles from './BIBTVerification-styles';

const BIBTVerification = props => {
  const {navigation, route} = props;
  const {phoneNumber = 0, email = '', userName = ''} = route.params;
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [counter, setCounter] = React.useState(59);

  const handleSignIn = () => signInWithPhoneNumber(true);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  const getPin = value => {
    setCode(value);
  };
  useEffect(() => {
    signInWithPhoneNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function signInWithPhoneNumber(isResend) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        phoneNumber,
        isResend ? isResend : '',
      );

      setConfirm(confirmation);
    } catch (e) {
      console.log('error', e);
    }
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code).then(response => {
        const uid = response?.user?.uid;

        const registrationData = {
          id: uid,
          email: email,
          fullName: userName,
          phoneNumber: phoneNumber,
        };
        const loginData = {
          id: uid,
          phoneNumber: phoneNumber,
        };

        const usersRef = firestore().collection('users');
        usersRef
          .doc(uid)
          .set(email ? registrationData : loginData)
          .then(() => {
            navigation.navigate('CreatePin', {
              user: email ? registrationData : loginData,
            });
          });
      });
    } catch (error) {
      console.log('Invalid code or unable to make store user');
    }
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.mainContainer}>
      <Text style={styles.enterText}>Enter your code</Text>
      <Text style={styles.pleaseText}>Please type the code we sent to</Text>
      <Text style={styles.number}> {phoneNumber}</Text>
      <View style={styles.otpContainer}>
        <BIBTOtpPin getPin={getPin} />
      </View>
      <Text style={styles.resendText}>{counter}</Text>
      <TouchableOpacity disabled={!!counter} onPress={handleSignIn}>
        <Text style={styles.linkText}>Resend link</Text>
      </TouchableOpacity>
      <BIBTButton
        title="Check Code"
        titleStyles={styles.buttonTitle}
        buttonStyles={styles.buttonStyle}
        onPress={confirmCode}
      />
    </LinearGradient>
  );
};

export default BIBTVerification;
