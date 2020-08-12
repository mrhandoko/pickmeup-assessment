import React from 'react';
import {View, Text, Image} from 'react-native';

import LogoIcon from '../../assets/logo.png';
import styles from './style';

const Logo = () => (
  <View style={styles.container}>
    <Image source={LogoIcon} style={styles.logo} />
    <Text style={styles.logoText}>Pickmeup</Text>
  </View>
);

export default Logo;
