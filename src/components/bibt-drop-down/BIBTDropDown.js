import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {DownIcon} from '../../assets';

import styles from './BIBTDropDown-styles';

const BIBTDropDown = props => {
  const {
    arrowIcon: ArrowIcon,
    customOptionsContainer,
    data,
    onSelect,
    outerOptionsContainer,
    placeHolderText,
    selectBoxStyle,
    value,
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  const onSelectedItem = selectedObject => {
    setShowOptions(false);
    onSelect(selectedObject);
  };

  const renderCurrency = () =>
    data.map(details => {
      const {name} = details;

      return (
        <TouchableOpacity
          key={name}
          onPress={() => {
            onSelectedItem(details);
          }}
          style={[styles.optionsContainer, customOptionsContainer]}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      );
    });

  const handlePress = () => {
    setShowOptions(!showOptions);
  };

  const renderIcon = ArrowIcon ? <ArrowIcon /> : <DownIcon />;

  return (
    <View style={styles.dropDown}>
      <TouchableOpacity
        style={[styles.selectBox, selectBoxStyle]}
        activeOpacity={0.8}
        onPress={handlePress}>
        <Text style={styles.name}>{value ? value : placeHolderText}</Text>
        {renderIcon}
      </TouchableOpacity>
      {showOptions && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.outerOptionContainer, outerOptionsContainer]}>
          {renderCurrency()}
        </ScrollView>
      )}
    </View>
  );
};

export default BIBTDropDown;
