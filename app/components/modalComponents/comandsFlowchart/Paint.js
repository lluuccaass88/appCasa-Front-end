import * as React from 'react';
import { center } from '@shopify/react-native-skia';
import {SafeAreaView, ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, View, Text, TextInput,TouchableHighlight} from 'react-native';

const overallWidth = Dimensions.get('window').width;

export default function Paint({ handleClose }) {

    
    const [xPosition, setxPosition] = React.useState("");
    const [yPosition, setyPosition] = React.useState("");

  return (
    
        <SafeAreaView style={styles.container} >
               <Text style={styles.title}> 
                    Escolha as coordenadas X e Y que deseja pintar! 
                </Text> 
                   
            <View style={styles.form}>
                <View style={styles.containerAlign}>
                    <Text style={styles.label}>X:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setxPosition}
                        value={xPosition}
                    />

                    <Text style={styles.label}>Y:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setyPosition}
                        value={yPosition}
                    />    
                </View>
                
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      titleContainer: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#333',
      },
      title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: '5%'
      },
      form: {
        alignItems: 'center',
        marginTop: "40%",
        paddingHorizontal: 15,
      },
      containerAlign:{
        flexDirection: 'row',
      },
      label: {
        color: 'white',
        marginRight: 10,
        fontSize: 25,
      },
      input: {
        height: 45,
        width: 70,
        marginRight: 20,
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
        marginTop: "45%"
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
      },
})

