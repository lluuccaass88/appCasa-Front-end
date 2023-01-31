
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStudent from '../pages/app/HomeAppStudent'

const AuthStack = createNativeStackNavigator();

function ARoutes() {
    
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="HomeStudent"
                component={HomeStudent}
            />
        </AuthStack.Navigator>
      
    );
  }
  
  export default ARoutes;