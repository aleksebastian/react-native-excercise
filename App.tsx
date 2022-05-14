import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import ColorPaletteModal from "./screens/ColorPaletteModal";
import ColorBox from "./components/ColorBox";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home}></MainStack.Screen>
      <MainStack.Screen
        name="Color Palette"
        component={ColorPalette}
        options={({ route }) => ({ title: route?.params?.paletteName })}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
