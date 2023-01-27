import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from '../contexts/auth';

export default async function HomeAppStudent({ navigation }) {

  recuperaToken()

  //console.log(user_token)

  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parabens você fez o login</Text>
      <Text>Nome: </Text>
</View>
  )

    function recuperaToken(){
      //console.log("oi no home app estudantes")
      //setUser_token("oi")

      //return tokenTest = await AsyncStorage.getItem("token")
    }

}