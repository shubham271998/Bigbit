import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';

import {
  BIBTActivityCard,
  BIBTHistoryCard,
  BIBTPortfolioValueCard,
} from '../../components';

import {ANIMATION} from '../../common/constant';
import {DATA} from './BIBTHome-constant';
import {APP_THEME} from '../../theme/appTheme';

import {ArrowDown} from '../../assets';

import {styles} from './BIBTHome-styles';

const BIBTHome = props => {
  const {navigation} = props;
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greeting;

  if (hrs < 12) {
    greeting = 'Good Morning';
  } else if (hrs >= 12 && hrs <= 17) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  const animation = ANIMATION[Math.floor(Math.random() * ANIMATION.length)];

  const name = useSelector(state => state.user.name);

  const handlePress = () => navigation.navigate('Activity');

  const renderCards = () =>
    DATA.map((data, index) => {
      const {
        coin,
        color,
        graphData,
        lossGainValue,
        name: title,
        shortName,
        value,
      } = data;

      return (
        <Animatable.View animation={animation} delay={index * 500}>
          <BIBTActivityCard
            key={`key-${index}`}
            coin={coin}
            color={color}
            graphData={graphData}
            lossGainValue={lossGainValue}
            name={title}
            shortName={shortName}
            value={value}
          />
        </Animatable.View>
      );
    });

  return (
    <LinearGradient
      colors={[APP_THEME.primaryColor, APP_THEME.secondaryColor]}
      style={styles.linearGradient}>
      <View>
        <View style={styles.welcomeTextUserName}>
          <Text style={styles.welcomeText}>{greeting}</Text>
          <Text style={styles.userName}>{name}</Text>
        </View>
        <BIBTPortfolioValueCard />
      </View>
      <View style={styles.activityCardContainer}>
        <View>
          <Text style={styles.activityCardTitle} onPress={handlePress}>
            Activity
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderCards()}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.recentTransactionHeading}>Recent Transaction</Text>
      </View>
      <BIBTHistoryCard
        header="Lapak laku"
        footer="Received - 1 Jan 2020"
        mid="+1.33 BTC"
        customImage={ArrowDown}
        cardStyles={styles.cardStyles}
      />
    </LinearGradient>
  );
};

export default BIBTHome;
