// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './views/loginScreen';
import Register from './views/registerScreen';
import HomeScreen from './views/homeScreen'
import HomeAppStudent from './views/HomeAppStudent'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'O app precisa de um nome' }}
        />
        
        <Stack.Screen //Auth
          name="Login"
           component={LoginScreen}
        />
        <Stack.Screen //Auth
          name="Register" 
          component={Register} 
        />
                            
        <Stack.Screen //App studant
          name="HomeAppStudent" 
          component={HomeAppStudent} 
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

export default App;