import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware, {SagaMiddlewareOptions} from 'redux-saga';
import {IS_TESTS} from '@constants/platforms';
import saga from '../sagas';
import {newTextSlice} from '@screens/ListOfSites/redux/reducer';

import Reactotron from 'reactotron-react-native';
import reactotronConfig from '../../helpers/reactotronConfig';

const sagaMiddlewares: SagaMiddlewareOptions = {};

if (
  __DEV__ &&
  !IS_TESTS &&
  Reactotron.createSagaMonitor &&
  Reactotron.createEnhancer
) {
  sagaMiddlewares.sagaMonitor = Reactotron.createSagaMonitor();
}

const sagaMiddleware = createSagaMiddleware(sagaMiddlewares);
const middleware = [sagaMiddleware];

const composeParams = [...middleware];

if (__DEV__ && !IS_TESTS && reactotronConfig) {
  composeParams.push(reactotronConfig.createEnhancer());
}

const store = configureStore({
  reducer: newTextSlice.reducer,
  middleware,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
