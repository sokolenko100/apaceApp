import {StyleSheet} from 'react-native';
import {hp, wp} from '@helpers/responsive';
import {colors} from '@assets/colors';

const styles = StyleSheet.create({
  wrapper: {
    margin: wp(4), // 15
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inputSpace: {
    marginTop: hp(2.709), // 22
  },
  submitButton: {
    padding: wp(2.667), // 10
  },
  loginDescription: {
    color: colors.textBasic,
  },
});

export {styles};
