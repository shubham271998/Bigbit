import React from 'react';
import {
  BIBTLogin,
  BIBTSignup,
  BIBTVerification,
  BIBTPrivacyPolicy,
  BIBTCreateLogin,
  BIBTActivity,
  BIBTExchange,
  BIBTDetailCandlesticks,
  BIBTManager,
  BIBTRevenueFlow,
  BIBTCurrencyBalance,
  BIBTReport,
  BIBTRequestQrCode,
  BIBTTransactionHistory,
  BIBTCurrenciesTrading,
  BIBTPrice,
  BIBTDetailTrading,
  BIBTScanQRCode,
} from '../../screens';

import {Dots, Heart, Refresh, SearchIcon, OutLined} from '../../assets';

const STACK_NAVIGATOR_DETAILS_BEFORE_LOGIN = [
  {
    name: 'Login',
    component: BIBTLogin,
    headerShown: false,
  },
  {
    name: 'Signup',
    component: BIBTSignup,
    headerShown: false,
  },
  {
    name: 'Verification',
    component: BIBTVerification,
    headerShown: true,
    navigate: 'Login',
  },
  {
    name: 'CreatePin',
    component: BIBTCreateLogin,
    headerShown: true,
    rightIcon: () => <Heart />,
    navigate: 'Verification',
  },
  {
    name: 'Privacy Policy',
    component: BIBTPrivacyPolicy,
    headerShown: true,
    navigate: 'Signup',
  },
];

const STACK_NAVIGATOR_DETAILS_AFTER_LOGIN = [
  {
    name: 'Activity',
    component: BIBTActivity,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Exchange',
    component: BIBTExchange,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Details',
    component: BIBTDetailCandlesticks,
    rightIcon: () => <Refresh />,
    headerShown: true,
  },
  {
    name: 'Transaction History',
    component: BIBTTransactionHistory,
    leftIcon: () => <SearchIcon />,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Trading',
    component: BIBTCurrenciesTrading,
    rightIcon: () => <OutLined />,
    headerShown: true,
  },
  {
    name: 'Manager',
    component: BIBTManager,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Report',
    component: BIBTReport,
    leftIcon: () => <OutLined />,
    rightIcon: () => <Refresh />,
    headerShown: true,
  },
  {
    name: 'ScanItem',
    component: BIBTScanQRCode,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Revenue',
    component: BIBTRevenueFlow,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Currency',
    component: BIBTCurrencyBalance,
    headerShown: true,
  },
  {
    name: 'Price',
    component: BIBTPrice,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'Detail Trading',
    component: BIBTDetailTrading,
    leftIcon: () => <SearchIcon />,
    rightIcon: () => <Dots />,
    headerShown: true,
  },
  {
    name: 'RequestQrCode',
    component: BIBTRequestQrCode,
    rightIcon: () => <Refresh />,
    headerShown: true,
  },
];

export {
  STACK_NAVIGATOR_DETAILS_BEFORE_LOGIN,
  STACK_NAVIGATOR_DETAILS_AFTER_LOGIN,
};
