import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {logOut} from '../../redux/reducers/auth';
import * as Animatable from 'react-native-animatable';

import {BIBTButton, BIBTDropDown, BIBTGroupBarChart} from '../../components';

import {ANIMATION} from '../../common/constant';
import {DASHBOARD_DATA, DROPDOWN_DATA} from './BIBTDashboard-constant';
import {APP_THEME} from '../../theme/appTheme';

import {LogOut} from '../../assets';

import styles from './BIBTDashboard-styles';

const BIBTDashboard = props => {
  const {navigation} = props;
  const [selectedItem, setSelectedItem] = useState({name: ''});
  const onSelect = item => {
    setSelectedItem(item);
  };

  const dispatch = useDispatch();

  const animation = ANIMATION[Math.floor(Math.random() * ANIMATION.length)];

  const logOutAction = async () => {
    try {
      await auth().signOut();
      dispatch(logOut());
    } catch (e) {
      console.log('error', e);
    }
  };
  const renderDashboardButtons = () =>
    DASHBOARD_DATA.map((dashboardDetails, index) => {
      const {title, image, onclick} = dashboardDetails;

      return (
        <Animatable.View animation={animation} delay={index * 300}>
          <BIBTButton
            key={title}
            customImage={image}
            title={title}
            buttonStyles={styles.button}
            titleStyles={styles.buttonTitle}
            onPress={() => navigation.navigate(onclick)}
          />
        </Animatable.View>
      );
    });

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <View style={styles.buttonContainer}>
        {renderDashboardButtons()}
        <Animatable.View animation={animation}>
          <BIBTButton
            title="Logout"
            customImage={LogOut}
            buttonStyles={styles.button}
            titleStyles={styles.buttonTitle}
            onPress={logOutAction}
          />
        </Animatable.View>
      </View>
      <View style={styles.chartHeader}>
        <BIBTDropDown
          data={DROPDOWN_DATA}
          onSelect={onSelect}
          value={selectedItem.name}
          placeHolderText={'Today'}
          selectBoxStyle={styles.dropDown}
          outerOptionsContainer={styles.dropDownUnSelected}
        />
        <View style={styles.chartLabel}>
          <View style={styles.dotPrimary} />
          <Text style={styles.labelText}>Received</Text>
          <View style={styles.dotSecondary} />
          <Text style={styles.labelText}>Sent</Text>
        </View>
      </View>
      <BIBTGroupBarChart style={styles.chart} />
    </LinearGradient>
  );
};

export default BIBTDashboard;
