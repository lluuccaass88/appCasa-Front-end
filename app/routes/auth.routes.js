import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../pages/auth/loginScreen'
import RegisterScreen from '../pages/auth/registerScreen'
import HomeAppStudent from '../pages/auth/homeScreen'

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
             <AuthStack.Screen 
                name="HomeAppStudent"
                component={HomeAppStudent}
            />
            <AuthStack.Screen 
                name="LoginScreen"
                component={LoginScreen}
            />
            <AuthStack.Screen 
                name="RegisterScreen"
                component={RegisterScreen}
            />
        </AuthStack.Navigator>
    );
  }
  
  export default AuthRoutes;