import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const WelcomeText = () => (
  <View>
    <Text style={styles.greetings}>Hey there!</Text>
    <Text style={styles.secondaryText}>
      Type in your phone number to get started
    </Text>
  </View>
);

export default WelcomeText;
