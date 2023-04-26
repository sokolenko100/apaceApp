import {wp} from '@helpers/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    margin: wp(4), // 15
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
    backgroundColor: 'yellow',
  },
  webViewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationGrabWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export {styles};
