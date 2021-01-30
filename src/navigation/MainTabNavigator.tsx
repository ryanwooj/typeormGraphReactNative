import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Posts, PostDetail } from "../screens";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import Header from "./Header";

const Stack = createStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="screen"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="Detail" component={PostDetail} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  const isFocused = useIsFocused();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Posts"
        // shifting={true}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Posts"
          component={PostStack}
          options={{ tabBarIcon: "home-account" }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon="feather"
          onPress={() => console.log("PRESSED FAB")}
          style={{
            backgroundColor: theme.colors.background,
            position: "absolute",
            bottom: 100,
            right: 16,
          }}
        />
      </Portal>
    </React.Fragment>
  );
};

export default MainTabNavigator;
