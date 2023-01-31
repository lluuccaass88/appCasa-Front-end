import React, {useContext} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import AuthContext from '../../contexts/auth'

export default function HomeStudent({ navigation }) {
  const { user, SignOut } = useContext(AuthContext)

  function handleSignOut(){
    SignOut()
  }

  return (
      <SafeAreaView >
      <Text >
        Parabens voce logou {user.user_name}
      </Text>
      <Button title='Sign out' onPress={handleSignOut} />
      </SafeAreaView>
  )
}

