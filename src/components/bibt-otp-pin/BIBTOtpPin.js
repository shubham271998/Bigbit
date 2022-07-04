import {TextInput} from 'react-native';
import React, {useState, useRef} from 'react';

import {OTP_BOX_DATA} from './BIBTOtpPin-constant';
import palette from '../../theme/palette';

import styles from './BIBTOtpPin-styles';

const BIBTOtpPin = props => {
  const {textBoxStyles, getPin = getPinDefault} = props;

  const [text, setText] = useState('');

  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  const getPinDefault = () => {};

  const renderOtpBoxes = () => {
    getPin(text);

    return OTP_BOX_DATA.map(props => {
      const {
        currentInputRef,

        nextInputRef,
        previousInputRef,
        id,
      } = props;

      return (
        <TextInput
          style={[styles.numberContainer, textBoxStyles]}
          keyboardType="numeric"
          ref={eval(currentInputRef)}
          multiline={false}
          numberOfLines={1}
          key={id}
          maxLength={1}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              setText(text.slice(0, -1));
              eval(previousInputRef).current.focus();
            } else {
              return null;
            }
          }}
          onChangeText={value => {
            setText(prevValue => prevValue + value);
            if (value) {
              eval(nextInputRef).current.focus();
              eval(currentInputRef).current.setNativeProps({
                style: {
                  backgroundColor: palette.picton_blue,
                },
              });
            } else {
              eval(currentInputRef).current.setNativeProps({
                style: {
                  backgroundColor: palette.brain_freeze,
                },
              });
            }
          }}
        />
      );
    });
  };
  return <>{renderOtpBoxes()}</>;
};

export default BIBTOtpPin;
