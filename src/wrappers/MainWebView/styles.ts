import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '@helpers/responsive';

const styles = StyleSheet.create({
  fullSizeWebViewContainer: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
});

export {styles};
