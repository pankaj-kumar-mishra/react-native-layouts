import React, {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from 'react';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  useTheme as useNavigationTheme,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  useTheme as usePaperTheme,
  Card,
  Title,
  Paragraph,
  Appbar,
  Button,
} from 'react-native-paper';

import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, useColorScheme} from 'react-native';

// NOTE this context should be in separate screen
export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: true,
});

const myColor = {bgColor: 'red', textColor: '#fff'};
const myDarkColor = {bgColor: 'yellow', textColor: '#000'};
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...myColor,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    ...myDarkColor,
  },
};

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Card>
        <Card.Content>
          <Title>Home Title</Title>
          <Paragraph>Home Paragraph</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const DetailsScreen = () => {
  const route = useRoute();

  const paperTheme = usePaperTheme();
  //const nativeScheme = useColorScheme();
  //const navigationTheme = useNavigationTheme();

  const {toggleTheme, isThemeDark} = useContext(PreferencesContext);

  // console.log(paperTheme);
  //console.log(nativeScheme);//'light' 'dark'
  //console.log(navigationTheme);

  return (
    <>
      <Appbar.Header
        theme={{
          colors: {
            primary: paperTheme?.colors.surface,
          },
        }}>
        <Appbar.Content title={route?.name} />
        <Button mode="contained" onPress={toggleTheme}>
          Change Theme
        </Button>
      </Appbar.Header>
      <Card style={{height: 250, backgroundColor: paperTheme?.colors.bgColor}}>
        <Card.Content>
          <Card.Title
            title="PANKAJ KUMAR MISHRA"
            subtitle="Hello welcome to react native theme tutorial. (React native paper with React navigation)"
            titleStyle={{color: paperTheme?.colors.textColor}}
            subtitleStyle={{color: paperTheme?.colors.textColor}}
          />
        </Card.Content>
      </Card>
    </>
  );
};

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
