import React from 'react';
import {SafeAreaView, ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Paint from './comandsFlowchart/Paint';
import Conditional from './comandsFlowchart/Conditional'
import Repeat from './comandsFlowchart/Repeat';
import {useModal} from '../../contexts/FlowChartComands'


const overallWidth = Dimensions.get('window').width;


// export default function ActionModalFlowchart({ handleClose, props }) {
  export default function ActionModalFlowchart({ handleClose}) {
  // aqui bugou, eu queria passar o id do comando pelas props
  const {conditionalId} = useModal()
  
  console.log("Id do comando: " + conditionalId)

  if(conditionalId === 0){
    return (  
      <SafeAreaView style={styles.container} >

        <View style={styles.content}>
          <Paint/>       
        </View>

      </SafeAreaView>
    )
  }else if(conditionalId === 1){
    return (  
      <SafeAreaView style={styles.container} >

        <View style={styles.content}>
          <Conditional/>       
        </View>

      </SafeAreaView>
    )
  }else{
    return (  
      <SafeAreaView style={styles.container} >

        <View style={styles.content}>
          <Repeat/>
        </View>

      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: overallWidth - 30,
    height: 570,
    backgroundColor: '#1E1D1D'
  }
})

