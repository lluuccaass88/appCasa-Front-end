import React, { useState } from 'react';
import { StyleSheet, Text, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import { Canvas } from '@shopify/react-native-skia';
const { widthScreen, heightScreen } = Dimensions.get('window');
import StartComponent from '../../../components/flowchart/FinalComponent.js'


export default GameScreen = ({ navigation }) => {

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

    </ImageBackground>
  );

}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1
  },
  text: {
    margin: 25,
    fontWeight: '400',
    fontSize: 40,
    color: "white"
  },
  button: {
    margin: 20,
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


