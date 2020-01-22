import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen!!!</Text>
        <Button
          title= "Go to details"
          onPress={()=> {
              this.props.navigation.navigate('Details', {passedParams: "Parameter from Home screen"})
            }
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {    
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.passedParams : 'Detailsssss'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen!!!</Text>
        <Button
          title= "Go to Home"
          onPress={()=> this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const StackNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'Home'
  }
)

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Home',
    drawerType: "slide",
    drawerPosition: "left"
  }
)

const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default function App() {
  return (
    <AppContainer/>
  );
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
// const AppContainer = createAppContainer(DrawerNavigation);
const AppContainer = createAppContainer(TabsNavigation);