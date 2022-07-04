import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {BIBTButton, BIBTInput} from '../../components';
import {setUserName} from '../../redux/reducers/user';

import {validation} from '../../common/utils';

import {APP_THEME} from '../../theme/appTheme';

import {BigBit, Email, Person, Phone} from '../../assets';

import styles from './BIBTSignup-styles';

const BIBTSignup = props => {
  const dispatch = useDispatch();

  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [phoneNoCheck, setPhoneNoCheck] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

  const clickHandler = () => navigation.navigate('Login');
  const pressHandler = () => navigation.navigate('Privacy Policy');

  const keyboardDismiss = () => Keyboard.dismiss();
  const navigationHandler = () => {
    dispatch(setUserName(name));
    setButtonClick(true);
    if (validation(phoneNo, email, name)) {
      navigation.navigate('Verification', {
        phoneNumber: `+91${phoneNo}`,
        email: email,
        userName: name,
      });
    }
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <TouchableWithoutFeedback onPress={keyboardDismiss}>
        <SafeAreaView style={styles.mainContainer}>
          <BigBit style={styles.bigBitIcon} height={80} width={45} />
          <Text style={styles.getStartedText}>Get Started</Text>
          <View style={styles.textContainer}>
            <Text style={styles.createText}>
              Let's create your own account{' '}
            </Text>
            <Text style={styles.privacyText} onPress={pressHandler}>
              Privacy Policy
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.inputTitle, styles.nameText]}>Name</Text>
          </View>
          {!nameCheck && buttonClick && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                Please enter a valid name.
              </Text>
            </View>
          )}
          <BIBTInput
            checkIcon={nameCheck}
            errorBox={!nameCheck && buttonClick}
            icon={Person}
            setCheckIcon={setNameCheck}
            setValue={setName}
            title="Enter Your Name"
            type="name"
            value={name}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.inputTitle} title="Enter Your Email">
              Email
            </Text>
          </View>
          {!emailCheck && buttonClick && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                Please enter a valid email.
              </Text>
            </View>
          )}
          <BIBTInput
            checkIcon={emailCheck}
            errorBox={!emailCheck && buttonClick}
            icon={Email}
            setCheckIcon={setEmailCheck}
            setValue={setEmail}
            title="Enter Your Email"
            type="email"
            value={email}
          />

          <View style={styles.titleContainer}>
            <Text style={[styles.inputTitle, styles.phoneText]}>
              Phone Number
            </Text>
          </View>
          {!phoneNoCheck && buttonClick && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                Please enter a valid number.
              </Text>
            </View>
          )}
          <BIBTInput
            checkIcon={phoneNoCheck}
            errorBox={!phoneNoCheck && buttonClick}
            icon={Phone}
            setCheckIcon={setPhoneNoCheck}
            setValue={setPhoneNo}
            title="Enter Your Phone No."
            type="phone"
            value={phoneNo}
          />
          <BIBTButton
            onPress={navigationHandler}
            buttonStyles={styles.buttonStyles}
            titleStyles={styles.titleStyles}
            title="Get Started"
          />
          <View style={styles.footer}>
            <Text style={styles.accountText}>Don't have an account? </Text>
            <Text style={styles.loginText} onPress={clickHandler}>
              Login
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default BIBTSignup;
