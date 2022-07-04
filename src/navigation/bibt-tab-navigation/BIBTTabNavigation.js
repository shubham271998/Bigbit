import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View, Text, Platform} from 'react-native';

import {heightPercent} from '../../common/utils';

import {BOTTOMTABNAVIGATOR_DETAILS} from './BIBTTabNavigation-constant';
import palette from '../../theme/palette';

import styles from './BIBTTabNavigation-styles';

const Tab = createBottomTabNavigator();

const BIBTTabNavigator = () => {
  const renderTabScreenDetails = () =>
    BOTTOMTABNAVIGATOR_DETAILS.map(details => {
      const {
        component,
        headerTitle,
        icon,
        leftIcon: LeftIcon,
        middleIcon: MiddleIcon,
        name,
        rightIcon: RightIcon,
      } = details;

      return (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={() => ({
            headerTitleStyle: {
              color: palette.white,
              display: 'none',
            },
            headerLeft: () => (
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                {LeftIcon && (
                  <View style={styles.leftIconContainer}>
                    <LeftIcon />
                    <Text style={styles.headerTitle}>{headerTitle}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={styles.rightHeader}>
                {MiddleIcon && (
                  <View>
                    <MiddleIcon />
                  </View>
                )}
                {RightIcon && (
                  <View style={styles.rightMostIcon}>
                    <RightIcon />
                  </View>
                )}
              </View>
            ),
            headerStyle: {
              backgroundColor: palette.tiffany_blue,
              borderBottomColor: 'transparent',
              borderBottomWidth: 0,
              elevation: 0,
              shadowColor: 'transparent',
              shadowOpacity: 0,
              shadowRadius: 10,
            },
            headerRightContainerStyle: {padding: 20},
            headerTitle: headerTitle,
            tabBarIcon: icon,
          })}
        />
      );
    });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: palette.persian_indigo,
          height: Platform.OS === 'ios' ? heightPercent(10) : heightPercent(8),
          paddingHorizontal: 10,
          paddingTop: 5,
          paddingBottom:
            Platform.OS === 'ios' ? heightPercent(3) : heightPercent(1),
        },
        tabBarActiveTintColor: palette.white,
        tabBarActiveBackgroundColor: palette.lighter_purple,
        tabBarItemStyle: {borderRadius: 8, padding: 4},
      }}>
      {renderTabScreenDetails()}
    </Tab.Navigator>
  );
};

export default BIBTTabNavigator;
