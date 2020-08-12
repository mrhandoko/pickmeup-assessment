import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  facebookButton: {
    marginRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0156DF',
    width: 150,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  facebookText: {
    fontSize: 20,
    marginLeft: 20,
  },
  googleButton: {
    marginLeft: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#acacac',
    width: 150,
    height: 45,
    alignItems: 'center',
  },
  googleIcon: {
    marginHorizontal: 10,
  },
  googleTextBg: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#0156DF',
  },
  googleText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
});

export default styles;
