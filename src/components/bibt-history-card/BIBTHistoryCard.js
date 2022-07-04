import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './BIBTHistoryCard-styles';

const BIBTHistoryCard = props => {
  const {
    cardStyles,
    customImage: CustomImage,
    customImageRight: CustomImageRight,
    footer,
    footerStyles,
    header,
    headerStyles,
    mid,
    midStyles,
    outerContainer,
    timeStamp,
  } = props;

  const renderCustomImage = CustomImage ? <CustomImage /> : null;
  const renderCustomImageRight = CustomImageRight ? <CustomImageRight /> : null;

  return (
    <View style={[styles.defaultCardStyles, cardStyles]}>
      <View style={styles.imageContainer}>{renderCustomImage}</View>
      <View style={outerContainer}>
        <View style={styles.header}>
          <Text style={[styles.defaultHeader, headerStyles]}>{header}</Text>
          <Text style={styles.defaultTimeStamp}>{timeStamp}</Text>
        </View>
        <Text style={[styles.defaultFooter, footerStyles]}>{footer}</Text>
      </View>
      <Text style={[styles.defaultMid, midStyles]}>{mid}</Text>
      {renderCustomImageRight}
    </View>
  );
};

export default BIBTHistoryCard;
