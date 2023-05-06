import { Canvas, useTouchHandler } from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import ConditionalComponent from '../../../components/flowchart/ConditionalComponent.js';
import LoopComponent from '../../../components/flowchart/LoopComponent.js';
import PaintComponent from '../../../components/flowchart/PaintComponent.js';
import {useModal} from '../../../contexts/ModalContext.js'


const { widthScreen, heightScreen } = Dimensions.get('window');


export default ChangeComand = ({ navigation }) => {

  const {setVisibleModal} = useModal()


  const overallWidth = Dimensions.get('window').width;

  const positionX = (overallWidth / 2) - 100;

  const positions = {
    positionPaint: {
      x: positionX,
      y: 0
    },
    positionConditional: {
      x: positionX,
      y: 40
    },
    positionLoop: {
      x: positionX,
      y: 130
    }
  }

  const touchHandlerPaint = useTouchHandler({
    onActive: () => {
      console.log("OI")
      setVisibleModal(true)
    }
  });

  const touchHandlerConditional = useTouchHandler({
    onActive: () => {
      console.log("OI triangulo")
    }
  });

  const touchHandlerLoop = useTouchHandler({
    onActive: () => {
      console.log("OI hexagono")
    }
  });


  return (
    <ImageBackground source={require('../../../assets/backgroundEscuro.png')} style={styles.imageBackground}>

      <ScrollView >

        <Text
          style={styles.text}
        >
          Escolha o comando que deseja adicionar ao fluxograma.
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('GameScreen')}
        >
          <Text
            style={styles.buttonText}>
            Voltar
          </Text>
        </TouchableHighlight>

        <Canvas style={{ height: 90 }} onTouch={touchHandlerPaint}>
          <PaintComponent position={positions} />
        </Canvas>

        <Canvas style={{ height: 180 }} onTouch={touchHandlerConditional}>
          <ConditionalComponent position={positions} />
        </Canvas>

        <Canvas style={{ height: 280 }} onTouch={touchHandlerLoop}>
          <LoopComponent position={positions} />
        </Canvas>

        <Text
          style={styles.text}
        >
          Marca o final
        </Text>

      </ScrollView>

      <Modal 
          visible={visibleModal}
          transparent={true}
          onRequestClose={ () => setVisibleModal(false)}
        >
          <ActionModalMenu 
            handleClose={ () => setVisibleModal(false)}
          />
        </Modal>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1,
  },
  text: {
    margin: 25,
    marginBottom: 5,
    fontWeight: '400',
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  button: {
    margin: 20,
    marginBottom: 30,
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
