import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

export default function GemeScreen({ navigation }) { 
  const draggableItemList = [// Array com as opções de coisas que podem ser arrastadas
    {
      "id": 1,
      "name": "Inicio",
      "background_color": "red",
      "allowedUses": 1,
      "uses": 0
    },
    {
      "id": 2,
      "name": "Fim",
      "background_color": "pink",
      "allowedUses": 1,
      "uses": 0
    },
    {
      "id": 3,
      "name": "Decisão",
      "background_color": "orange",
      "allowedUses": 10,
      "uses": 0,
      "command": ''
    },
    {
      "id": 4,
      "name": "Comando",
      "background_color": "green",
      "allowedUses": 10,
      "uses": 0,
      "command": ''
    },
    {
      "id": 5,
      "name": "Loop",
      "background_color": "#aaaaff",
      "allowedUses": 10,
      "uses": 0,
      "command": ''
    },

  ];
  const FirstReceivingItemList = [ //Array onde as coisas que são arrastadas vão ficar
    {
      "id": 13,
      "name": " ",
      "background_color": 'rgba(117, 131, 136, 0.2)'
    },
    {
      "id": 14,
      "name": " ",
      "background_color": 'rgba(117, 131, 136, 0.2)'
    },
    {
      "id": 15,
      "name": " ",
      "background_color": 'rgba(117, 131, 136, 0.2)'
    },
    {
      "id": 16,
      "name": " ",
      "background_color": 'rgba(117, 131, 136, 0.2)'
    }
  ];

  const [receivingItemList, setReceivedItemList] = useState(FirstReceivingItemList);
  const [dragItemMiddleList, setDragItemListMiddle] = useState(draggableItemList);

  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.draggableBox /*styles.TriangleShapeView*/, { backgroundColor: item.background_color }]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        // hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
      </DraxView>
    );
  }

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }

  return (
    <ImageBackground source={require('../../../assets/background1.jpg')} style={styles.imageBackground}>
      <GestureHandlerRootView
        style={gestureRootViewStyle}>
        <View>
          <Text style={styles.headerStyle}>{'App casa teste de arrasta e solta'}</Text>
        </View>
        <DraxProvider>
          <View style={styles.container}>
            <View style={styles.receivingContainer}>
              {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))}
            </View>
            <View style={styles.draxListContainer}>
              <DraxList
                data={dragItemMiddleList}
                renderItemContent={DragUIComponent}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                ItemSeparatorComponent={FlatListItemSeparator}
                scrollEnabled={true}
              />
            </View>
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground:{
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 4) - 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  receiving: { //Borda do que vai ser elecionado
    borderColor: 'yellow',
    borderWidth: 2,
  },
  draggableBox: {
    width: (Dimensions.get('window').width / 4) - 12,
    height: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: { //Style do lugar para onde as coisas serão arrastadas
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    padding: 5,
    height: 200
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100
  },
  textStyle: {
    fontSize: 18
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
  },
  TriangleShapeView: {
    width: (Dimensions.get('window').width / 8) - 22,
    height: (Dimensions.get('window').width / 10) - 22,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: '#3AB54A',
  }


})




// const styles = StyleSheet.create({

//   imageBackground:{
//     flex: 1,
//   },
//   text: {
//     margin: 25,
//     fontWeight: '400',
//     fontSize: 40,
//     color: "white"
//   },
//   button: {
//     margin: 20,
//     padding: 1,
//     width: 146,
//     height: 35,
//     backgroundColor: '#3CDE38',
//     borderRadius: 10
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: '400',
//   }
// })




