import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

import {BIBTOnboarding} from '../../screens';
import BIBTTabNavigator from '../bibt-tab-navigation/BIBTTabNavigation';

import palette from '../../theme/palette';
import {
  STACK_NAVIGATOR_DETAILS_AFTER_LOGIN,
  STACK_NAVIGATOR_DETAILS_BEFORE_LOGIN,
} from './BIBTStackNaviation-constant';

import {Arrow, Heart} from '../../assets';

import styles from './BIBTStackNavigation-styles';

const BIBTStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const isHeaderShown = () => {
    return {
      headerShown: false,
    };
  };
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const renderOnboarding = () => {
    if (isFirstLaunch === true) {
      return (
        <Stack.Screen
          name="Onboarding"
          component={BIBTOnboarding}
          options={isHeaderShown()}
        />
      );
    }
  };
  const renderScreen = () => {
    if (!isUserLoggedIn) {
      return (
        <>
          {renderOnboarding()}
          {STACK_NAVIGATOR_DETAILS_BEFORE_LOGIN.map((details, index) => {
            const {
              name,
              component,
              headerShown,
              rightIcon: RightIcon,
              navigate,
            } = details;

            return (
              <Stack.Screen
                key={`key-${index}`}
                name={name}
                component={component}
                options={
                  headerShown
                    ? ({navigation}) => ({
                        headerStyle: {
                          backgroundColor: palette.tiffany_blue,
                        },
                        headerTitleStyle: {
                          fontSize: 0,
                        },
                        headerLeft: () =>
                          headerShown ? (
                            <TouchableOpacity
                              onPress={() => navigation.navigate(navigate)}
                              style={styles.arrowContainer}
                              hitSlop={{
                                top: 20,
                                bottom: 20,
                                left: 50,
                                right: 50,
                              }}>
                              <Arrow style={styles.arrow} />
                              <Text style={styles.headerLeftText}>{name}</Text>
                            </TouchableOpacity>
                          ) : null,
                        headerRight: () =>
                          RightIcon && <Heart style={styles.heart} />,
                        headerShadowVisible: false,
                      })
                    : {headerShown: false}
                }
              />
            );
          })}
        </>
      );
    } else {
      return (
        <>
          <Stack.Screen
            name="Home"
            component={BIBTTabNavigator}
            options={isHeaderShown()}
          />
          {STACK_NAVIGATOR_DETAILS_AFTER_LOGIN.map((details, index) => {
            const {
              name,
              component,
              leftIcon: LeftIcon,
              rightIcon: RightIcon,
              headerShown,
            } = details;

            return (
              <Stack.Screen
                key={`key-${index}`}
                name={name}
                component={component}
                options={
                  headerShown
                    ? ({navigation}) => ({
                        headerTitle: false,
                        headerStyle: {
                          backgroundColor: palette.tiffany_blue,
                        },
                        headerTitleStyle: {
                          fontSize: 0,
                        },
                        headerLeft: () => (
                          <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.arrowContainer}
                            hitSlop={{
                              top: 20,
                              bottom: 20,
                              left: 50,
                              right: 50,
                            }}>
                            <Arrow style={styles.arrow} />
                            <Text style={styles.headerLeftText}>{name}</Text>
                          </TouchableOpacity>
                        ),
                        headerRight: () => (
                          <View style={styles.rightHeader}>
                            {LeftIcon && <LeftIcon />}
                            <View style={styles.rightMostIcon}>
                              {RightIcon && <RightIcon />}
                            </View>
                          </View>
                        ),
                        headerShadowVisible: false,
                      })
                    : {headerShown: false}
                }
              />
            );
          })}
        </>
      );
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreen()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default BIBTStackNavigation;
