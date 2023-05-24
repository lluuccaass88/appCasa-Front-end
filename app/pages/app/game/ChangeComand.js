import { Canvas, useTouchHandler } from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, Modal } from 'react-native';
import ConditionalComponent from '../../../components/flowchart/ConditionalComponent.js';
import {useModal} from '../../../contexts/FlowChartComands.js'
import {useArray} from '../../../contexts/ArrayComands.js'

import ActionModalFlowchart from '../../../components/modalComponents/ActionModalFlowchart.js'
import LoopComponent from '../../../components/flowchart/LoopComponent.js';
import PaintComponent from '../../../components/flowchart/PaintComponent.js';

import ServiceComands from '../../../services/ServiceComands.js';

const { widthScreen, heightScreen } = Dimensions.get('window');


export default ChangeComand = ({ navigation }) => {

  const {setVisibleModal, visibleModal, setConditionalId, conditionalId} = useModal()
  const {comands, setComands} = useArray()
  


  const overallWidth = Dimensions.get('window').width;

  const positionX = (overallWidth / 2) - 100;

  // const positions = {
  //   positionPaint: {
  //     x: positionX,
  //     y: 0
  //   },
  const positions = {
    positionPaint: ServiceComands.buildComandObjectJustPosition(positionX, 0),
    positionConditional: {
      x: positionX,
      y: 40
    },
    positionLoop: {
      x: positionX,
      y: 130
    }
  }

  console.log("Por favor aparece algo" + positions.positionPaint)

  const touchHandlerPaint = useTouchHandler({
    onActive: () => {
      console.log("OI")
      setConditionalId(0)
      setVisibleModal(true)
    }
  });

  const touchHandlerConditional = useTouchHandler({
    onActive: () => {
      console.log("OI triangulo")
      setConditionalId(1)
      setVisibleModal(true)
    }
  });

  const touchHandlerLoop = useTouchHandler({
    onActive: () => {
      console.log("OI hexagono")
      setConditionalId(2)
      setVisibleModal(true)
    }
  });

  const handleDataChanger = (newData) => {
    setComands(
      {
        "x": newData[0],
        "y": newData[1]
      }
      )
    setVisibleModal(false)
    navigation.navigate('GameScreen')
  };


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
          {/* <PaintComponent position={positions.positionPaint} /> */}
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
          <ActionModalFlowchart 
            // conditionalId={conditionalId}
            onDataChanged={handleDataChanger}
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
