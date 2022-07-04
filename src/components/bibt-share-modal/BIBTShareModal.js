import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {BIBTHistoryCard, BIBTButton} from '..';
import BIBTShareButton from './bibt-share-button/BIBTShareButton';

import {SHARE_DATA} from './BIBTShareModal-constant';
import palette from '../../theme/palette';

import {Download, OnLight} from '../../assets';

import styles from './BIBTShareModal-styles';

const BIBTShareModal = props => {
  const {isModalVisible, setIsModalVisible} = props;

  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const onBackdropPress = () => setIsModalVisible(false);
  const onBackButtonPress = () => setIsModalVisible(false);

  const cardDetails = data => {
    const {item, index} = data;
    const {header, footer, icon} = item;

    const shareButton =
      SHARE_DATA.length - 1 === index ? BIBTShareButton : null;

    return (
      <BIBTHistoryCard
        customImage={icon}
        cardStyles={styles.cardStyles}
        header={header}
        headerStyles={styles.headerStyles}
        footer={footer}
        footerStyles={styles.footerStyles}
        customImageRight={shareButton}
      />
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      backdropColor={palette.black_pearl}
      style={styles.modal}>
      <View style={styles.modalStyles}>
        <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
          <OnLight />
        </TouchableOpacity>

        <FlatList
          data={SHARE_DATA}
          renderItem={cardDetails}
          style={styles.flatlistStyle}
          keyExtractor={(_, index) => `key-${index}`}
        />

        <View style={styles.buttonContainer}>
          <BIBTButton
            buttonStyles={styles.modalButtonDownload}
            customImage={Download}
          />
          <BIBTButton
            buttonStyles={styles.modalButtonShare}
            title="Share"
            titleStyles={styles.titleStyles}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BIBTShareModal;
