import React, { useState } from "react";
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "./graphql";
import { AppNavigator } from "./src/navigation";
import { LogBox } from "react-native";
import merge from "deepmerge";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isDarkTheme, setisDarkTheme] = useState(false);

  function toggleTheme() {
    setisDarkTheme((isDarkTheme) => !isDarkTheme);
  }

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider theme={theme}>
        <AppNavigator theme={theme} toggleTheme={toggleTheme} />
      </PaperProvider>
    </ApolloProvider>
  );
}
