
import React, {useState} from "react";
import { createNativeStackNavigator, Image, TouchableHighlight, View } from '@react-navigation/native-stack';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
import MenuProvider from '../contexts/menu'


import HomeStudent from '../pages/app/HomeAppStudent'

const AuthStack = createNativeStackNavigator();


function BackIcon() {//Função que mostra o menu, mas eu queria que ao clicar no menu aparecesse o omenu
    return (
      <Icon name="settings-outline" size={30} color="white"  onPress={() =>{setvisibleModal(true)} }/>
    );
  }

function ARoutes() {
    const [visibleModal, setVisibleModal] = useState(false);
    return (
        <AuthStack.Navigator
            screenOptions={{
                title: 'App casa',
                headerStyle: {
                backgroundColor: '#050505',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <BackIcon />
            }}
        >
            <AuthStack.Screen 
                name="HomeStudent"
                component={HomeStudent}      
                value={{lucas: false}}          
            />
        </AuthStack.Navigator>
      
    );
  }
  
  export default ARoutes;