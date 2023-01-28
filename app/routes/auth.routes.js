import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../pages/loginScreen'

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="LoginScreen"
                component={LoginScreen}
            />
        </AuthStack.Navigator>
    );
  }
  
  export default AuthRoutes;