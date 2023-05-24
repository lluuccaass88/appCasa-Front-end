import * as React from 'react';
import { center } from '@shopify/react-native-skia';
import { SafeAreaView, ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, View, Text, TextInput, TouchableHighlight } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const overallWidth = Dimensions.get('window').width;

export default function Repeat({ handleClose }) {
  const conditions = ["Maior igual", "Menor igual", "Igual", "Diferente"]

  const conditionalMap = new Map();
  conditionalMap.set(conditions[0], ">=")
  conditionalMap.set(conditions[1], "<=")
  conditionalMap.set(conditions[2], "==")
  conditionalMap.set(conditions[3], "!=")


  const [xPosition, setxPosition] = React.useState("");
  const [yPosition, setyPosition] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const [temporaryConditional, setTemporaryConditional] = React.useState("");
  const [conditional, setConditional] = React.useState(" ");

  React.useEffect(() => {
    setConditional(conditionalMap.get(temporaryConditional))
  }, [temporaryConditional])


  // const handleChange = () => { ADAPTAR DPS
  //   console.log("Camada Paint")
  //   if(isNumeric(xPosition) && isNumeric(yPosition)){
  //     onDataChanged([xPosition, yPosition]);
  //   }else{
  //     console.log("oi")
  //     setIsVisible(true)
  //     console.log(isVisible)   
  //   }
    
  // };

  return (

    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>
        Comando REPITA!
      </Text>

      <View style={styles.form}>

        <Text style={styles.label}>
          Selecione a condição:
        </Text>

        <SelectDropdown
          data={conditions}
          onSelect={setTemporaryConditional}
          buttonStyle={(styles.inputDropDown)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />

        <Text style={styles.text}>Repita enquanto</Text>

        <View style={styles.containerAlign}>


          <View style={styles.value}>
            <Text style={styles.label}>Valor 1:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setxPosition}
              value={xPosition}
            />
          </View>

          <Text style={styles.text}> For </Text>

          <Text style={styles.text}> {conditional} {/* Aqui vai trocar automatico */} </Text>

          <View style={styles.value}>
            <Text style={styles.label}>Valor 2:</Text>
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
        //onPress={() => handleRegister()}
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
    marginTop: 10,
    fontSize: 25,
  },
  container: {
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
  value: {
    flexDirection: 'row'
  },
  inputContainer: {
    alignItems: 'center',
    marginRight: 20,
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
    marginBottom: '10%',
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

