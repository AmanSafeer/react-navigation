import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class About extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>About Us Page</Text>
            <Button title="Go to Home" onPress={()=>this.props.navigation.navigate("Home")}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });