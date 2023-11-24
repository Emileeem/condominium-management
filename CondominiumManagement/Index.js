import { StyleSheet, Text, View, Modal, TouchableOpacity, ImageBackground, Pressable, TextInput } from 'react-native';
import React, { useState, useContext } from 'react';
import logo from './image/logo.png'
import { registerTranslation, DatePickerInput  } from 'react-native-paper-dates'
import { SafeAreaProvider } from "react-native-safe-area-context";
import EButton from './components/EButton';
import styles from './themes/styles';
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

                <EButton 
                    nome="reservar churrasqueira"
                    cor="#4bb8b6"
                    img={require("./image/churras.png")}
                    onPress={() => setCalendarVisible(true)}
                    >
                </EButton>

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
