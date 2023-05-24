import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import { Canvas } from '@shopify/react-native-skia';
const { widthScreen, heightScreen } = Dimensions.get('window');
import StartComponent from '../../../components/flowchart/FinalComponent.js'
import PaintComponent from '../../../components/flowchart/PaintComponent.js';
import { useArray } from '../../../contexts/ArrayComands.js';

export default GameScreen = ({ navigation }) => {

  const { comandsArray } = useArray() //Vem do arrayComands

  console.log("Tamanho do array -> " + comandsArray[0])

  const position = {
    y: 100,
    x: 233
  }

  return (
    <ImageBackground source={require('../../../assets/background1.jpg')} style={styles.imageBackground}>

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('ChangeComand')}
      >
        <Text
          style={styles.buttonText}>
          Nova peça
        </Text>
      </TouchableHighlight>

      <StartComponent position={position} />

      { comandsArray.map((item, key)=>(
//          <PaintComponent position={item} />
            <Text style={styles.text}>Aqui vai ficar o comando</Text>
      ))}

    </ImageBackground>
  );

}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1
  },
  text: {
    margin: 25,
    marginTop: -20, //Retirar depos
    fontWeight: '400',
    fontSize: 20,
    color: "white"
  },
  button: {
    margin: 20,
    marginBottom: -20, 
    padding: 1,
    width: widthScreen,
    height: 40,
    backgroundColor: '#3CDE38',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '450',
  },
  comand: {
    // alignSelf: 'center',
  },
  canva: {
    flex: 1,
    alignContent: "center"
  }
})

  // const handleDragRelease = (event, gesture) => {
  //   console.log("oi")
  //   setPosition({ x: gesture.x, y: gesture.y });
  // };


/* <Draggable
  x={position.x}
  y={position.y}
  renderSize={80}
  renderColor='red'
  renderText='Med arraste'
  isCircle
  onShortPressRelease={() => console.log('short press')}
  onLongPress={() => console.log('long press')}
  onDragRelease={(event, gestureState, bounds) => {
    handlePosition(gestureState.moveX, gestureState.moveY)
    console.log("Mexeu")
  }}
/>

<Draggable
  x={position.x}
  y={position.y}
  renderSize={80}
  renderColor='red'
  renderText='Med arraste'
  isCircle
  onShortPressRelease={() => console.log('short press')}
  onLongPress={() => console.log('long press')}
  onDragRelease={(event, gestureState, bounds) => {
    handlePosition(gestureState.moveX, gestureState.moveY)
    console.log("log2: " + gestureState.moveX)
    console.log("Mexeu")
  }}
/> */


