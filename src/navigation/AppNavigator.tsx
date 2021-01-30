import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme } from "@react-navigation/native";
import { DrawerContent } from "./DrawerContent";
import { Posts } from "../screens";
import MainTabNavigator from "./MainTabNavigator";

const Drawer = createDrawerNavigator();

const AppNavigator = (navProps: any) => {
  return (
    <NavigationContainer theme={navProps.theme}>
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerContent {...props} toggleTheme={navProps.toggleTheme} />
        )}
      >
        <Drawer.Screen name="Home" component={MainTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
