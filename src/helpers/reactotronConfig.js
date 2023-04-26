import {IS_TESTS} from '@constants/platforms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__ && !IS_TESTS) {
  console.log = Reactotron.log;
}

let _reactotronConfig;

if (IS_TESTS) {
  _reactotronConfig = {};
} else {
  try {
    _reactotronConfig = Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure()
      .use(reactotronRedux())
      .use(sagaPlugin())
      .useReactNative()
      .connect();
  } catch (error) {
    console.error('Error configuring Reactotron', error);
  }
}

export default _reactotronConfig;
