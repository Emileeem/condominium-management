import { StyleSheet, Text, View, Modal, TouchableOpacity, ImageBackground, Pressable, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import logo from './image/logo.png'
import { UtilsContext } from './Context';
import { registerTranslation, DatePickerInput  } from 'react-native-paper-dates'
import { SafeAreaProvider } from "react-native-safe-area-context";

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
    main2: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-direction",
    },
    viewAll: {
        backgroundColor: "#D9B1AD",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#595859",
        width: "354px",
        height: "110px",
        marginLeft: "1%",
        marginBottom: "2%",
    },
    text: {
        textAlign: "center",
        fontSize: "20px",
        color: "#000",
        display: "flex",
        top: "-80PX",
        left: "25PX",
        width: "50px",
        textAlign: "left"
    },
    text2: {
        textAlign: "center",
        fontSize: "20px",
        color: "#FFF",
        display: "flex",
        left: "115px",
        top: "25px",
        width: "50px",
        textAlign: "left"
    },
    img1:
    {
        width: '100px',
        height: '100px',
        display: 'flex',
        left: "70%"
    },
    img2:
    {
        width: '100px',
        height: '100px',
        bottom: "45px",
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
        backgroundColor: 'red',
        position: "relative",
        bottom: "105%",
        left: "59%"
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
    title: {
        fontSize: "25px",
        marginBottom: "15px",
        color: "red",
        textAlign: "center"
    },
    enviar: {
        width: "105px",
        height: "45px",
        backgroundColor: "#595859",
        borderRadius: "20px",
        top: "15%"
    },
    assunto: {
        fontSize: "18px"
    },
    input: {
        borderColor: "#595859",
        borderWidth: 2,
        height: "35px",
        width: "275px",
        margin: "1%"
    },
    input2: {
        borderColor: "#595859",
        borderWidth: 2,
        height: "95px",
        width: "275px",
        margin: "1%"
    }
})

export default function Index(props) {
    // Modals
    const [denuncia, setDenunciaVisible] = useState(false);
    const [calendar, setCalendarVisible] = useState(false);

    //Calendario
    const [inputDate, setInputDate] = React.useState(undefined)

    return (
        <>
            <View style={styles.main}>
                <View style={styles.main2}>
                    <img src={logo} style={{ width: "150px", height: "150px" }} />
                    <Text style={{ fontSize: "30px" }}> Bem vindo s/n! </Text>
                </View>

                <Text style={{ fontSize: "25px", textAlign: 'center', margin: "20px" }}> O valor atual do condomínio é de: R$ 1500,00 </Text>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#4bb8b6" }]} onPress={() => setCalendarVisible(true)}>
                    <ImageBackground
                        source={require('./image/churras.png')}
                        style={styles.img1}
                    />
                    <Text style={styles.text}> Reservar Churrasqueira </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#c43333" }]} onPress={() => setDenunciaVisible(true)}>
                    <Text style={styles.text2}> Denunciar Irregularidades </Text>
                    <ImageBackground
                        source={require('./image/denuncia.png.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#92cf69" }]}>
                    <ImageBackground
                        source={require('./image/boleto.png')}
                        style={styles.img1}
                    />
                    <Text style={styles.text}> Gerar Boleto </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#674d9e" }]}>
                    <Text style={styles.text2}> Vaga de estacionamento </Text>
                    <ImageBackground
                        source={require('./image/carro.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#ebe86c" }]}>
                    <ImageBackground
                        source={require('./image/votar.png')}
                        style={styles.img1}
                    />
                    <Text style={styles.text}> Votações </Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={denuncia}
                onRequestClose={() => {
                    Alert.alert('Denuncia foi fechada.');
                    setDenunciaVisible(!denuncia);
                }}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>

                        <Text style={styles.title}>Denunciar Irregularidades</Text>
                        <Text style={styles.assunto}> Qual o assunto? </Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.assunto}> Descreva o problema que ocorreu: </Text>
                        <TextInput style={styles.input2} />

                        <TouchableOpacity style={styles.enviar} >
                            <Text style={styles.textStyle}> Enviar Denúncia</Text>
                        </TouchableOpacity>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setDenunciaVisible(!denuncia)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>

                    </View>

                </View>

            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={calendar}
                onRequestClose={() => {
                    Alert.alert('Calendário foi fechado.');
                    setCalendarVisible(!calendar);
                }}>

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>

                        <Text style={styles.title}> Reservar Churrasqueira </Text>
                        <Text style={styles.assunto}> Qual o evento? </Text>
                        <TextInput style={styles.input} />
                        <SafeAreaProvider>
                            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginTop: 15}}>
                                <DatePickerInput
                                    locale="pt-br"
                                    label="Selecione"
                                    value={inputDate}
                                    onChange={(d) => setInputDate(d)}
                                    inputMode="start"
                                />
                            </View>
                        </SafeAreaProvider>

                        <TouchableOpacity style={[styles.enviar,{ width: "155px"}]} >
                            <Text style={styles.textStyle}> Enviar Pedido de Reserva </Text>
                        </TouchableOpacity>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setCalendarVisible(!calendar)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>

                    </View>

                </View>

            </Modal>

        </>
    )
}
