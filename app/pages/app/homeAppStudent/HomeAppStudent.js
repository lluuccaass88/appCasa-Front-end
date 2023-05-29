import React from 'react';
import {TouchableHighlight, Text, SafeAreaView, ImageBackground, Modal} from 'react-native';
import {useMenu} from '../../../contexts/Menu'
import ActionModalMenu from '../../../components/modalComponents/ActionModalMenu'
import styles from './Style';
import Controller from './Controller';

export default function HomeStudent({ navigation }) { 
  const { visibleModal, setVisibleModal } = useMenu() //Agora eu preciso descobrir uma forma de quando o visibleModal ficar como true ele disparar uma função


  return (
    <ImageBackground source={require('../../../assets/background1.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        <Text 
          style={styles.text}
        >
          Vamos Nessa!
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('GameScreen')}
        >
          <Text 
            style={styles.buttonText}>
            Novo Jogo
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Teste')}
        >
          <Text 
            style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableHighlight>

        <Modal 
          visible={visibleModal}
          transparent={true}
          onRequestClose={ () => setVisibleModal(false)}
        >
          <ActionModalMenu 
            handleClose={ () => setVisibleModal(false)}
          />
        </Modal>
      </SafeAreaView>
    </ImageBackground>

  )
}


