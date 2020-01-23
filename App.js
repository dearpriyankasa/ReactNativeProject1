import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Devices } from './Devices/Devices';
import { Settings } from './Settings/Settings';
import People from './People/People';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

// const StackNavigation = createStackNavigator(
//   {
//     DevicesScreen: {
//       screen: Devices
//     },
//     SettingsScreen: {
//       screen: Settings
//     }
//   },
//   {
//     tabBarPosition: 'bottom',
//     initialRouteName: 'DevicesScreen'
//   }
// )

const DrawerNavigation = createDrawerNavigator(
  {
    PeopleScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "People"
      },
      screen: People
    },
    DevicesScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Devices"
      },
      screen: Devices
    },
    SettingsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: Settings
    }
  },
  {
    initialRouteName: 'PeopleScreen',
    drawerType: "slide",
    drawerPosition: "left"
  }
)

// const TabsNavigation = createBottomTabNavigator(
//   {
//     DevicesScreen: {
//       screen: Devices
//     },
//     SettingsScreen: {
//       screen: Settings
//     }
//   },
//   {
//     initialRouteName: 'DevicesScreen'
//   }
// )

const CustomHeader = ({nav}) => (
  <View styles={styles.container}>
      <Ionicons
        name="md-menu"
        size={45}
        color="black"
        onPress={() => nav.openDrawer()}
      />
  </View>
);

export default class App extends Component {
  render() {
  // console.log("Props are = ", this.props.navigation);
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const AppContainer = createAppContainer(StackNavigation);
const AppContainer = createAppContainer(DrawerNavigation);
// const AppContainer = createAppContainer(TabsNavigation);