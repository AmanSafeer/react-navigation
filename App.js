
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer,createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createDrawerNavigator,createSwitchNavigator,createTabNavigator,createNavigator} from 'react-navigation'
import Home from './src/home'
import About from './src/about'

const routes = createMaterialTopTabNavigator({
  Home:Home,
  About:About,
},{headerMode:"none"})

const Container = createAppContainer(routes)
export default class App extends Component {
  render() {
    return (
      <Container/>
    );
  }
}

