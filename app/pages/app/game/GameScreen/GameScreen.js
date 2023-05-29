import React from 'react';
import {Text, ImageBackground, TouchableHighlight } from 'react-native';
import StartComponent from '../../../../components/flowchart/FinalComponent.js'
import { useArray } from '../../../../contexts/ArrayComands.js';
import styles from './Style.js';

export default GameScreen = ({ navigation }) => {

  const { comandsArray } = useArray() //Vem do arrayComands

  const position = {
    y: 100,
    x: 233
  }

  return (
    <ImageBackground source={require('../../../../assets/')} style={styles.imageBackground}> 

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
            <Text style={styles.text}>Aqui vai ficar o comando</Text>
      ))}

    </ImageBackground>
  );

}