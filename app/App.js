

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import LoginScreen fro./pages/loginScreeneen';
// import Register from './views/registerScreen';
// import HomeScreen from './views/homeScreen'
// import HomeAppStudent from './views/HomeAppStudent'

import Routes from './routes';

import {AuthProvider} from './contexts/auth';


function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider> 
    </NavigationContainer>
    
  );
}

export default App;