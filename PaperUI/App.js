import 'react-native-gesture-handler';
import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
// MSG THEME/NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {darkTheme, defaultTheme} from './src/utils/themes';
import Router from './src/navigations/Router';

const App = () => {
  const {is_dark_mode} = useSelector(
    state => ({
      is_dark_mode: state.app_R.is_dark_mode,
    }),
    shallowEqual,
  );

  const theme = is_dark_mode ? darkTheme : defaultTheme;

  // const scheme = useColorScheme();
  // axios.defaults.headers['Content-Type'] = 'application/json';
  // axios.defaults.headers['X-Key'] = APP_SECRET;
  // axios.defaults.headers.Accept = 'application/json';
  // axios.defaults.baseURL = BASE_URL;

  // useEffect(() => {
  //   console.log(scheme);
  // }, [scheme]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
