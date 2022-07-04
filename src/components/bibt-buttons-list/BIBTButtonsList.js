import {View} from 'react-native';
import React from 'react';

import BIBTButton from '../bibt-button/BIBTButton';

import palette from '../../theme/palette';

const BIBTButtonsList = props => {
  const {
    activeBackgroundColor,
    activeTextColor,
    backgroundColor,
    buttonStyles,
    containerStyles,
    data,
    placeholderStyles,
    returnValue,
  } = props;

  const initialArray = new Array(data.length).fill({
    backgroundColor: backgroundColor,
  });

  let tempArray = [...initialArray];
  tempArray[0] = {backgroundColor: activeBackgroundColor};

  const initialTextArray = new Array(data.length).fill({
    color: palette.white,
  });

  let tempTextColor = [...initialTextArray];
  tempTextColor[0] = {color: activeTextColor};

  const [activeColor, setActiveColor] = React.useState(tempArray);
  const [activeTextColor1, setActiveTextColor1] = React.useState(tempTextColor);

  const handleClick = index => {
    tempArray = initialArray;
    tempArray[index] = {backgroundColor: activeBackgroundColor};
    setActiveColor(tempArray);
    tempTextColor = initialTextArray;
    tempTextColor[index] = {color: activeTextColor};
    setActiveTextColor1(tempTextColor);
    returnValue(data[index].value);
  };

  const renderButtonList = () =>
    data &&
    data.map((duration, index) => {
      const handlePress = () => {
        handleClick(index);
      };

      return (
        <BIBTButton
          buttonStyles={[buttonStyles, activeColor[index]]}
          key={duration.value}
          onPress={handlePress}
          title={duration.value}
          titleStyles={[placeholderStyles, activeTextColor1[index]]}
        />
      );
    });

  return <View style={containerStyles}>{renderButtonList()}</View>;
};

export default BIBTButtonsList;
