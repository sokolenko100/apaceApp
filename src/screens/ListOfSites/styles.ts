import {wp} from '@helpers/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    margin: wp(4),
    flex: 1,
  },
  textWrapper: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  siteWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webViewWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationGrabWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
