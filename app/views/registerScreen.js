import * as React from 'react';
import { TouchableHighlight, Text, SafeAreaView,  TextInput, StyleSheet, ImageBackground, Image, View, ScrollView, Label } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios';
import InputValidators from '../services/inputValidators'


export default function RegisterScreen({ navigation }) {

  const [user_email, setUser_email] = React.useState("");
  const [user_secret_key, setUser_secret_key] = React.useState("");
  const [user_secret_key_repeat, setUser_secret_key_repeat] = React.useState("")
  const [user_name, setUser_name] = React.useState("");
  const [user_role, setUser_role] = React.useState("");
 
  const roles = ["Estudante", "Professor"]

  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.imageBackground}>
     <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/disco-voador2.png')} style={styles.imageForeground}/>
          <Text style={styles.text}>
            Cadastrar
          </Text>

          <Text style={styles.label}>
            Email:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser_email}
            value={user_email}
          />
          
          <Text style={styles.label}>
            Nome de usuário:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser_name}
            value={user_name}
          />

          <Text style={styles.label}>
            Escolha seu papel:
          </Text>

          <SelectDropdown
              data={roles}
              onSelect={setUser_role} //Teoricamente essa linha vai fazer com que salve no state
              buttonStyle={(styles.input)}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
          />

          <Text style={styles.label}>
            Digite uma senha:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser_secret_key}
            value={user_secret_key}
          />

          <View style={styles.viewPasswordRequire}>
            <Text style={styles.textPasswordTitle}>
              Sua senha deve possuir: 
            </Text>
          </View>        
          <View style={styles.viewPasswordRequire}>
            <Text style={styles.textPassword}>
              Pelo menos 6 Caracteres;
            </Text>
          </View>
          <View style={styles.viewPasswordRequire}>
            <Text style={styles.textPassword}>
              Pelo menos um numero;
            </Text>
          </View>
          <View style={styles.viewPasswordRequire}>
            <Text style={styles.textPassword}> 
              Letras maiusculas e minusculas.
            </Text>
          </View>

          <Text style={styles.label}>
            Repita a senha:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setUser_secret_key_repeat}
            value={user_secret_key_repeat}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => cadastrar()}
          > 
            <Text 
              style={styles.buttonText}>
              Cadastrar
            </Text>
          </TouchableHighlight>
        
      </SafeAreaView>

     </ScrollView> 
    </ImageBackground>
  )

  async function cadastrar(){
    let returnVerf = InputValidators.passwordValidator(user_secret_key)

    if(!InputValidators.emailValidator(user_email)){
      alert("Por favor diite um email valido")
    }else if(!returnVerf.status){
      alert(`Erro: ${returnVerf.message}`)
    }else if(user_secret_key_repeat != user_secret_key_repeat){
      alert("A senha não é igual a digitada primeiramente.")
    }else{
      const data = {
        user_email,
        user_secret_key,
        user_name,
        user_role
      };

      try {
        const response = await axios.post('http://10.0.0.115:3333/auth/register', data);
        console.log(`A resposta do servidor é: ${response.data}`);
        //navigation.navigate('HomeTest')
      } catch (err) {
        console.log(err)
        alert('Erro no login, tente novamente.'+ err);
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTest: {
    alignItems: 'center'
  },
  imageBackground:{
    flex: 1,
  },
  imageForeground: {
    resizeMode: 'stretch'
  },
  text: {
    margin: 25,
    fontWeight: '400',
    fontSize: 40,
    color: "white"
  },
  label: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    width: '90%',
    marginTop: 12
  },
  input: {
    height: 45,
    width: '90%',
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'white',
    textAlign: 'left'
  },
  button: {
    margin: 20,
    padding: 1,
    width: 146,
    height: 35,
    backgroundColor: '#3CDE38',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
  viewPasswordRequire: {
    width: '90%',
    marginTop: 4,
    flexDirection: 'row',
    alignItems: "center"
  },
  textPassword:{
    marginLeft: 4,
    color: 'white'
  },
  textPasswordTitle:{
    fontWeight: 'bold',
    color: 'white'
  }
})