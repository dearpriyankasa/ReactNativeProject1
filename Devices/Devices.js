import React, { Component } from 'react';
import styles from './Devices.styles';
import { Text, View, Button } from 'react-native';

export class Devices extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Devices Screen!!!</Text>
            <Button
              title= "Go to Settings"
              onPress={()=> {
                  this.props.navigation.navigate('SettingsScreen', {passedParams: "Parameter from Devices screen"})
                }
              }
            />
          </View>
        );
      }
}

export default Devices;
