import React from 'react';
import { StyleSheet, View ,Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import i18n from '../../constants/translation/I18n';
import COLORS from '../../constants/colors';
import HomeScreen from './HomeScreen';

//const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabScreen({navigation}) {

  return (
   
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 300,
          borderTopWidth: 0,
          elevation: 0,
          headerShown: false, 
        }, 
             
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}   
        options={{
          tabBarLabel: i18n.t('home'),
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/home.png')}
              resizeMode='contain'
          />
            ),  
          tabBarColor: '#009387',
          headerShown: false,
        
          tabBarActiveTintColor: COLORS.gray,
          tabBarInactiveTintColor: 'black',
          
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>

  );

};

export default MainTabScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#777',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  drawerStyle: {
    color: '#000',
    paddingRight: 3
  },
  tinyLogo:{
    width:35,
    height:35
  }
});

