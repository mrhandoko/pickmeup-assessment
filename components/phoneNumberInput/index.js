import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import Flag from '../../assets/flag.png';
import styles from './style';

const PhoneNumberInput = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.flagContainer}>
          <Image source={Flag} />
          <Text style={styles.codeArea}>+234</Text>
          <View style={styles.caretDown} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            keyboardType="number-pad"
            placeholder="0803 123 4567"
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.submitBtnContainer}>
        <TouchableOpacity
          onPress={props.submitPhoneNumber}
          style={styles.submitBtn}>
          <Text style={styles.textBtn}>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumberInput;
