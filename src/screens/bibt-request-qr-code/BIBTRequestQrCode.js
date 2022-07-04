import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';

import {BIBTButton, BIBTHistoryCard} from '../../components';

import {DATA} from './BIBTRequestQrCode.constant';
import {APP_THEME} from '../../theme/appTheme';

import {Download, Lock} from '../../assets';

import styles from './BIBTRequestQrCode-styles';

const BIBTRequestQrCode = props => {
  const {Data} = props.route.params;

  const copyToClipboard = () => {
    Clipboard.setString(Data);
    Alert.alert('text Copied');
  };

  const renderData = () => {
    return (
      <View style={styles.historyContainer}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={data => (
            <BIBTHistoryCard
              header={data.item.title}
              footer={data.item.date}
              customImage={data.item.icon}
              headerStyles={styles.headerStyles}
              footerStyles={styles.footerStyles}
              cardStyles={styles.cardStyles}
              outerContainer={styles.outerContainer}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/RequestQrCode.png')} />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.addressText}>Your Ethereum Address </Text>
            <Text style={styles.codeText}>{Data}</Text>
          </View>
          <TouchableOpacity>
            <Lock />
          </TouchableOpacity>
        </View>

        {renderData()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.download} onPress={copyToClipboard}>
            <Download />
          </TouchableOpacity>
          <BIBTButton
            title="Share"
            buttonStyles={styles.buttonStyles}
            titleStyles={styles.titleStyles}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BIBTRequestQrCode;
