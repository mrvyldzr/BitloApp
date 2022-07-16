import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from "./SignUpScreen";

const LoginStack = createStackNavigator();


function Auth({navigation}) {

  return (
<LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#E2E7EA",
        },
      }}
    >
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
        
        headerShown: false
        }}
      />
      <LoginStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false
         
        }}
      />
    </LoginStack.Navigator>
  );
};

export default Auth;
