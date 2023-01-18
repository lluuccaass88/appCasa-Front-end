import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/loginScreen';
import Register from '../views/registerScreen';
import HomeScreen from '../views/homeScreen'
import HomeAppStudent from '../views/HomeAppStudent'


const AuthStack = createNativeStackNavigator();

async function RoutesController(){
        return(

            <AuthStack.Navigator>
                <AuthStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ title: 'O app precisa de um nome' }}
                />

                <AuthStack.Screen //Auth
                    name="Login"
                    component={Login}
                />
                <AuthStack.Screen //Auth
                    name="Register" 
                    component={Register} 
                />
                
                <AuthStack.Screen //App studant
                    name="HomeAppStudent" 
                    component={HomeAppStudent} 
                />
        </AuthStack.Navigator>

        )
}

export default RoutesController