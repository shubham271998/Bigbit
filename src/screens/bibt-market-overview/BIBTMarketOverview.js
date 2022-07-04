import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import BIBTLineChart from './bibt-line-chart/BIBTLineChart';
import {BIBTDropDown, BIBTShareModal} from '../../components';
import useFetchData from '../../hooks/useFetchData';

import {CRYPTO_NAME_URL} from '../../common/config';
import {APP_THEME} from '../../theme/appTheme';

import {
  BitCoin,
  RightArrow,
  HistoryTransaction,
  BalancePortfolio,
} from '../../assets';

import styles from './BIBTMarketOverview-styles';

const BIBTMarketOverview = props => {
  const {navigation} = props;
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const dropDownOptions = useFetchData(CRYPTO_NAME_URL);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const onSelect = item => setSelectedItem(item);

  const handlePress = () => navigation.navigate('Transaction History');

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.marketOverview}>
      <View style={styles.market}>
        <BIBTDropDown
          data={dropDownOptions.response}
          onSelect={onSelect}
          value={selectedItem.name}
          placeHolderText={'C/USD'}
          selectBoxStyle={styles.selectBoxStyle}
          outerOptionsContainer={styles.outerOptionsContainer}
        />
        <View style={styles.logoAndAmountDetails}>
          <View style={styles.logoCoin}>
            <BitCoin />
            <View style={styles.coinText}>
              <Text style={styles.coin}>Bitcoin</Text>
              <Text style={styles.shortCoinText}>BTC</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amountDollar}>$ 10,922.90</Text>
            <Text style={styles.frequency}>1.00 BTC</Text>
          </View>
        </View>
        <BIBTLineChart />
        <View style={styles.personalDetailsCard}>
          <TouchableOpacity
            style={styles.balanceContainer}
            onPress={toggleModal}>
            <BalancePortfolio />
            <Text style={styles.historyText}>Balance in your portfolio</Text>
            <RightArrow />
          </TouchableOpacity>
          <BIBTShareModal
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
            onPress={toggleModal}
          />
          <TouchableOpacity
            style={styles.balanceContainer}
            onPress={handlePress}>
            <HistoryTransaction />
            <Text style={styles.historyText}>History of transactions</Text>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default BIBTMarketOverview;
