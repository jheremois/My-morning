import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Datacontext } from '@src/context/ConectionContext';

const ConectionVer = () => {

  const {data} = useContext(Datacontext)
  const [modalVisible, setModalVisible] = useState(!data);

  useEffect(()=>{
    setModalVisible(!data)
  }, [])

  return (
    modalVisible
      ?
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              No internet conection
            </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={
                () => {
                  setModalVisible(data)
                }
              }
            >
                <Text style={styles.buttonCloseText}>
                  Retry
                </Text>
              </Pressable>
          </View>
        </View>
      :
        <View></View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 99999,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#515151',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
  },
  modalView: {
    width: Dimensions.get('window').width - 60,
    margin: 20,
    backgroundColor: "#151515",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    elevation: 2,
    backgroundColor: "#f0f0f070",
  },
  buttonCloseText: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontWeight: 'bold',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f0f0f0',
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ConectionVer;