import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Pagination from 'react-native-pagination';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";

import productReducer from './src/stores/reducers/products'
import cartReducer from './src/stores/reducers/carts'
import HomeScene from "./src/screens/HomeScene";
import ProductListScene from "./src/screens/ProductListScene"
import TabBarIcon from "./src/components/TabBarIcon";


const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

const store = createStore(rootReducer)

const DefaultScene = props => {
  return (
    <View style={{backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'}}>
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

export default function App() {
  return (
    
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}


