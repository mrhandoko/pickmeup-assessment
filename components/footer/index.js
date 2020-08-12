import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Facebook from '../../assets/facebook-square.png';
import Google from '../../assets/google.png';
import styles from './style';

const Footer = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('Facebook button clicked!')}
        style={styles.facebookButton}>
        <Image source={Facebook} />
        <Text style={styles.facebookText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Google button clicked!')}
        style={styles.googleButton}>
        <Image source={Google} style={styles.googleIcon} />
        <View style={styles.googleTextBg}>
          <Text style={styles.googleText}>Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
