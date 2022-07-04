import React from 'react';

import {BIBTButton} from '../..';

import {styles} from './BIBTShareButton-styles';

const BIBTShareButton = () => {
  return (
    <BIBTButton
      title="Sent"
      titleStyles={styles.titleStyles}
      buttonStyles={styles.buttonStyles}
    />
  );
};

export default BIBTShareButton;
