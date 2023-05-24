import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { isNumeric } from '../../../utils/Verifications';

export default function Paint({ onDataChanged  }) {


  const [xPosition, setxPosition] = React.useState("");
  const [yPosition, setyPosition] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const paintId = 0;



  const handleChange = () => {
    if(isNumeric(xPosition) && isNumeric(yPosition)){
      onDataChanged([xPosition, yPosition, paintId]);
    }else{
      setIsVisible(true)
      console.log(isVisible)   
    }
  };

  return (

    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>
        Comando pintar!
      </Text>

      <Text style={styles.label}>
        Determine a posição X e Y que você deseja pintat:
      </Text>

      <View style={styles.form}>
        <View style={styles.containerAlign}>
          <View style={styles.value}>

            <Text style={styles.label}>X:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setxPosition}
              value={xPosition}
            />

          </View>


          <View style={styles.value}>

            <Text style={styles.label}>Y:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setyPosition}
              value={yPosition}
            />
          </View>

        </View>

        {isVisible && (
        <Text style={styles.textError}>
          Somente numeros são permitidos!
        </Text>
      )}


        <TouchableHighlight
          style={styles.button}
          onPress={() => handleChange()}
        >
          <Text
            style={styles.buttonText}>
            Inserir
          </Text>
        </TouchableHighlight>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    marginRight: 10,
    fontSize: 25,
  },
  container: {
    marginTop: "25%",
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '5%',
  },
  form: {
    alignItems: 'center',
    marginTop: '5%',
    paddingHorizontal: 15,
  },
  containerAlign: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  value: {
    flexDirection: 'row',
    marginBottom: 10
  },
  label: {
    textAlign: 'center',
    color: 'white',
    marginRight: 10,
    marginTop: '8%',
    fontSize: 25,
  },
  input: {
    height: 45,
    width: 70,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    textAlign: 'left',
  },
  inputDropDown: {
    height: 45,
    width: 250,
    marginTop: 20,
    marginBottom: '5%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'white',
    textAlign: 'left',
  },
  button: {
    margin: 20,
    padding: 1,
    width: 146,
    height: 35,
    backgroundColor: '#3CDE38',
    borderRadius: 10,
    marginTop: "5%"
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
  textError: {
    textAlign: 'center',
    color: 'red',
    marginRight: 15,
    fontSize: 20,
  },
})
