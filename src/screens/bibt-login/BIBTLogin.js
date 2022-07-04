import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {firebase} from '@react-native-firebase/app-check';

import {BIBTButton, BIBTDropDown} from '../../components';

import {DATA} from './BIBTLogin-constant.js';
import {APP_THEME} from '../../theme/appTheme';

import {BigBit, Check, Control, Down} from '../../assets';

import styles from './BIBTLogin-styles.js';

const BIBTLogin = props => {
  const {navigation} = props;

  const [selectedItem, setSelectedItem] = useState({
    name: 'India',
    code: '+91',
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = item => {
    setSelectedItem(item);
  };

  const clickHandler = () => navigation.navigate('Signup');
  const renderCheckIcon = () => {
    return (
      phoneNumber.length === 10 &&
      !isNaN(phoneNumber) && <Check style={styles.checkIcon} />
    );
  };

  const handleTextChange = number => setPhoneNumber(number);
  const keyboardDismiss = () => Keyboard.dismiss();
  const phoneNumberError = () => {
    phoneNumber.length < 10 || isNaN(phoneNumber)
      ? setErrorMessage(true)
      : setErrorMessage(false);

    if (!errorMessage && phoneNumber.length === 10) {
      navigation.navigate('Verification', {
        phoneNumber: `${selectedItem.code}${phoneNumber}`,
      });
    }
  };

  firebase.appCheck().activate('ignored', false);

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <TouchableWithoutFeedback onPress={keyboardDismiss}>
        <SafeAreaView style={styles.mainContainer}>
          <BigBit style={styles.bigBitImage} />
          <View style={styles.bigBitContainer}>
            <Text style={[styles.whiteText, styles.bigText]}>Big</Text>
            <Text style={[styles.whiteText, styles.bitText]}>bit</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={[styles.whiteText, styles.heading]}>
            Enter your mobile number to login.
          </Text>
          <View style={styles.titleContainer}>
            <Text style={[styles.whiteText, styles.nationalText]}>
              National
            </Text>
          </View>
          {!selectedItem.code && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>Please select country.</Text>
            </View>
          )}

          <BIBTDropDown
            arrowIcon={Down}
            customOptionsContainer={styles.customOptionsContainer}
            data={DATA}
            onSelect={onSelect}
            outerOptionsContainer={styles.outerOptionsContainer}
            placeHolderText={'Country'}
            value={selectedItem.name}
            selectBoxStyle={[
              styles.selectBoxStyle,
              !selectedItem.code && styles.errorStyle,
            ]}
          />
          <View style={styles.titleContainer}>
            <View style={styles.nationalPhoneContainer}>
              <Text style={[styles.whiteText, styles.numberText]}>
                Phone number
              </Text>
            </View>
          </View>
          {errorMessage && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                Please enter correct number.
              </Text>
            </View>
          )}
          <View style={styles.numberContainer}>
            <Text style={styles.codeText}>{selectedItem.code}</Text>
            <TextInput
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={handleTextChange}
              style={[styles.numberField, errorMessage && styles.errorStyle]}
            />
            {renderCheckIcon()}
          </View>

          <View style={[styles.flexContainer, styles.buttonContainer]}>
            <View style={styles.imageContainer}>
              <Control />
            </View>
            <BIBTButton
              onPress={phoneNumberError}
              title="Send Code"
              buttonStyles={styles.buttonStyles}
              titleStyles={styles.titleStyles}
            />
          </View>
          <View style={[styles.footerContainer, styles.flexContainer]}>
            <Text style={[styles.whiteText, styles.newUserText]}>
              New user?{' '}
            </Text>
            <Text style={[styles.getStartedText]} onPress={clickHandler}>
              Get Started
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default BIBTLogin;
