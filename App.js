import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {BIBTStackNavigation} from './src/navigation';

const App = () => {
  useEffect(() => SplashScreen.hide());
  return <BIBTStackNavigation />;
};

export default App;
