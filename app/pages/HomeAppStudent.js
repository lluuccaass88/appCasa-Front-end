import React, {useContext} from 'react';
import {Text, SafeAreaView} from 'react-native';
import AuthContext from '../contexts/auth'

export default function HomeStudent({ navigation }) {
  const { user } = useContext(AuthContext)

  return (
      <SafeAreaView >
      <Text >
        Parabens voce logou {user.user.user_name}
      </Text>
      </SafeAreaView>
  )
}

