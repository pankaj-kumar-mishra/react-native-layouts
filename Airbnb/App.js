import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/navigation/Router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Router />;
};

export default App;
