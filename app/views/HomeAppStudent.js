import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function HomeAppStudent({ navigation }) {
  const [user_token, setUser_token] = React.useState(await AsyncStorage.getItem("token"))
  const [user_id, setUser_id] = React.useState("")

  recuperaToken()

  console.log(user_token)

  return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Parabens você fez o login</Text>
      <Text>Nome: </Text>
</View>
  )

    function recuperaToken(){
      //setUser_token("oi")

      //return tokenTest = await AsyncStorage.getItem("token")
    }

}