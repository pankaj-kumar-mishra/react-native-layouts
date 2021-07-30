/* eslint-disable prettier/prettier */
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

const myColor = {bgColor: 'red', textColor: '#fff'};
const myDarkColor = {bgColor: 'yellow', textColor: '#000'};

// MSG MERGE THEMES
export const defaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    ...myColor,
  },
};

export const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...myDarkColor,
  },
};

// DEFAULT COLORS
// PART PAPER

// dark (boolean): whether this is a dark theme or light theme.
// mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
// roundness (number): roundness of common elements, such as buttons.
// colors (object): various colors used throughout different elements.
// primary - primary color for your app, usually your brand color.
// accent - secondary color for your app which complements the primary color.
// background - background color for pages, such as lists.
// surface - background color for elements containing content, such as cards.
// text - text color for content.
// disabled - color for disabled elements.
// placeholder - color for placeholder text, such as input placeholder.
// backdrop - color for backdrops of various components such as modals.
// onSurface - background color for snackbars
// notification - background color for badges
// fonts (object): various fonts used throughout different elements.
// regular
// medium
// light
// thin
// animation (object)
// scale - scale for all animations

// PART NAVIGATION

// dark (boolean): Whether this is a dark theme or a light theme
// colors (object): Various colors used by react navigation components:
// primary (string): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
// background (string): The color of various backgrounds, such as background color for the screens.
// card (string): The background color of card-like elements, such as headers, tab bars etc.
// text (string): The text color of various elements.
// border (string): The color of borders, e.g. header border, tab bar border etc.
// notification (string): The color of Tab Navigator badge.
