
import React, {useContext, useEffect} from "react";
import { createNativeStackNavigator, Image, TouchableHighlight, View } from '@react-navigation/native-stack';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
import {useMenu} from '../contexts/menu'

 import GemeScreen from "../pages/app/game/GemeScreen";

import HomeStudent from '../pages/app/HomeAppStudent'

const AppStack = createNativeStackNavigator();




function ARoutes() {
    // const [visibleModal, setVisibleModal] = useState(false);
    const {setVisibleModal} = useMenu()


    function BackIcon() {//Função que mostra o menu, mas eu queria que ao clicar no menu aparecesse o omenu
        return (
        <Icon name="menu" size={45} color="white"  onPress={() =>{setVisibleModal(true)} }/>
        );
    }

    
    return (
        <AppStack.Navigator
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
            <AppStack.Screen 
                name="HomeStudent"
                component={HomeStudent}           
            />
            
            <AppStack.Screen 
                name="GemeScreen"
                component={GemeScreen}           
            />
        </AppStack.Navigator>
      
    );
  }
  
  export default ARoutes;