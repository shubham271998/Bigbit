import React from 'react';
import {View, Text, Alert, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {BIBTButton} from '../../components';

import {APP_THEME} from '../../theme/appTheme';

import {styles} from './BIBTScanQRCode-styles';

const BIBTScanQRCode = props => {
  const {navigation} = props;

  const clickHandler = data =>
    navigation.navigate('RequestQrCode', {Data: data});
  const clickHandle = () => navigation.navigate('Home.');
  const onSuccess = e => {
    const check = e.data.substring(0, 16);
    Alert.alert(check);
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        Alert.alert('An error occured', err),
      );
    }
    clickHandler(check);
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <QRCodeScanner
        reactivate
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        cameraStyle={styles.cameraStyle}
      />
      <View style={styles.containerText}>
        <Text style={styles.cashText}>Cash Address</Text>
        <Text style={styles.hintText}>
          Align qr code within frame to scan. Scanning Code…
        </Text>
        <BIBTButton
          title="Cancel"
          buttonStyles={styles.buttonStyle}
          titleStyles={styles.titleStyle}
          onPress={clickHandle}
        />
      </View>
    </LinearGradient>
  );
};

export default BIBTScanQRCode;
