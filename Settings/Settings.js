import React, { Component } from 'react';
import styles from './Settings.styles';
import { Text, View, Button } from 'react-native';

export class Settings extends Component {
      static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.passedParams : 'Settings'
        }
      };

      render() {
        return (
          <View style={styles.container}>
            <Text>Settings Screen!!!</Text>
            <Button
              title= "Go to Devices"
              onPress={()=> this.props.navigation.goBack()}
            />
          </View>
        );
      }
}

export default Settings
