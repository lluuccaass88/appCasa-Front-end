import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeAppStudent from '../pages/HomeAppStudent'

const AppStack = createNativeStackNavigator();

function AppRoutes() {
    //console.log("Chegou no app parabens")
    return (
        <AppStack.Navigator>
            <AppStack.Screen 
                name="HomeAppStudent"
                component={HomeAppStudent}
            />
        </AppStack.Navigator>
      
    );
  }
  
  export default AppRoutes;