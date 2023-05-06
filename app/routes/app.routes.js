
import React, {useContext, useEffect} from "react";
import { createNativeStackNavigator, Image, TouchableHighlight, View } from '@react-navigation/native-stack';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
import {useMenu} from '../contexts/Menu'
import { ModalProvider } from '../contexts/ModalContext';

import GameScreen from "../pages/app/game/GameScreen";
import ChangeComand from "../pages/app/game/ChangeComand";
import HomeStudent from '../pages/app/HomeAppStudent'


const AppStack = createNativeStackNavigator();




function AppRoutes() {
    // const [visibleModal, setVisibleModal] = useState(false);
    const {setVisibleModal} = useMenu()


    function BackIcon() {//Função que mostra o menu, mas eu queria que ao clicar no menu aparecesse o omenu
        return (
        <Icon name="menu" size={45} color="white"  onPress={() =>{setVisibleModal(true)} }/>
        );
    }

    
    return (
        <ModalProvider>
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
                    name="GameScreen"
                    component={GameScreen}           
                />

                    <AppStack.Screen 
                        name="ChangeComand"
                        component={ChangeComand}           
                    />
            </AppStack.Navigator>
        </ModalProvider>

      
    );
  }
  
  export default AppRoutes;