
import React, {useContext, useEffect} from "react";
import { createNativeStackNavigator, Image, TouchableHighlight, View } from '@react-navigation/native-stack';
// import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/Ionicons';
import {useMenu} from '../contexts/Menu'
import { FlowChartComandsProvider } from '../contexts/FlowChartComands';
import { ArrayComandsProvider } from '../contexts/ArrayComands'

import GameScreen from "../pages/app/game/GameScreen/GameScreen";
import ChangeComand from "../pages/app/game/ChangeComand/ChangeComand";
import HomeStudent from '../pages/app/homeAppStudent/HomeAppStudent'

const AppStack = createNativeStackNavigator();

function AppRoutes() {

    const {setVisibleModal} = useMenu()    

    function BackIcon() {//Função que mostra o menu, mas eu queria que ao clicar no menu aparecesse o omenu
        return (
        <Icon name="menu" size={45} color="white"  onPress={() =>{setVisibleModal(true)} }/>
        );
    }
    
    return (
        <FlowChartComandsProvider>
            <ArrayComandsProvider>
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
            </ArrayComandsProvider>
        </FlowChartComandsProvider>

      
    );
  }
  
  export default AppRoutes;