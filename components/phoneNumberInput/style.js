import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#0156DF',
    marginVertical: '20%',
  },
  container: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  flagContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRightColor: '#dfdfdf',
    borderRightWidth: 2,
  },
  codeArea: {
    paddingHorizontal: 5,
    color: '#111118',
    fontWeight: 'bold',
    fontSize: 16,
  },
  caretDown: {
    width: 0,
    height: 0,
    marginTop: 7,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [{rotate: '180deg'}],
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 16,
  },
  submitBtnContainer: {
    flex: 0.2,
  },
  submitBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0156DF',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginLeft: 5,
  },
  textBtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
