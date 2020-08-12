import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Keyboard,
} from 'react-native';

import {Logo, WelcomeText, PhoneNumberInput, Footer} from './components';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const submitPhoneNumber = () => {
    Keyboard.dismiss();
    alert(phoneNumber);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Logo />
            <WelcomeText />
            <PhoneNumberInput
              value={phoneNumber}
              onChangeText={(value) => setPhoneNumber(value)}
              submitPhoneNumber={submitPhoneNumber}
            />
          </View>
          <Footer />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0156DF',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#0156DF',
    padding: 50,
  },
});

export default App;
