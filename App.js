import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import TabBarIcon from "./src/components/TabBarIcon";

import HomeScene from "./src/screens/HomeScene";
import ProductListScene from "./src/screens/ProductListScene"
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";



const DefaultScene = props => {
  return (
    <View>
      <Text>SampleScreen</Text>
    </View>
  );
};

const defaultNavigationOptions = {
  headerTintColor: "black",
  headerStyle: {
    backgroundColor: "white"
  }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScene,
    ProductList: ProductListScene,
    Cart: DefaultScene
  },
  {
    defaultNavigationOptions
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "ios-home"}
      />
  )
}

const ListStack = createStackNavigator(
  {
    List: ProductListScene
  },
  {
    defaultNavigationOptions
  }
);

ListStack.navigationOptions = {
  tabBarLabel: "List",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "ios-list"}
    />
  )
};

const CartStack = createStackNavigator(
  {
    Cart: DefaultScene
  },
  {
    defaultNavigationOptions
  }
);

CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "ios-cart"}
    />
  )
};

const MainTab = createBottomTabNavigator(
  {
    Home: HomeStack,
    List: ListStack,
    Cart: CartStack
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainTab
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
