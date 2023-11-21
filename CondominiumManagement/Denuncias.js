import { StyleSheet, Text, View, Pressable, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import logo from './image/logo.png'

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F2F2F2',
        margin: 1,
        width: '100%',
        height: '100%',
        borderColor: '#D9B1AD',
        borderWidth: 2,
        padding: 10,
        margin: "1%",
        alignContent: "center",
        alignItems: "center"
    },
    logo: {
        width: "250px",
        height: "250px",
        marginLeft: "8%"
    },
    view: {
        padding: "10px",
        borderColor: "#595859",
        borderRadius: "5px",
        borderWidth: 2,
        width: "350px",
        top: "5%"
    },
    buton: {
        width: "110px",
        height: "35px",
        backgroundColor: "#D9B1AD",
        borderRadius: "1px",
        borderWidth: 2,
        borderColor: "#595859",
        display: "flex",
        left: "60%"
    },
    title: {
        fontSize: "20px",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#595859',
        position: "relative",
        bottom: "105%",
        left: "89%"
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

export default function Denuncias(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.main}>
                <View >
                    <img src={logo} style={styles.logo} />
                    <Text style={{ fontSize: "30px" }}> Denúncias pendentes:</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}> Título </Text>
                    <TouchableOpacity style={styles.buton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.title}> Visualizar </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>

                        <Text style={styles.title}>Título!</Text>
                        <Text style={styles.modalText}> CONTEUDOOOOO </Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                        
                    </View>

                </View>

            </Modal>
        </>
    )
}