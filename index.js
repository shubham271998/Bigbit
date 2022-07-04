import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';

import store from './src/redux/store';
import App from './App';

const Root = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
