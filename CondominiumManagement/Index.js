import { Text, View, Modal, TouchableOpacity, Pressable, TextInput, TouchableOpacityBase} from 'react-native';
import React, { useState, useEffect } from 'react';
import logo from './image/logo3.png'
import { DatePickerInput  } from 'react-native-paper-dates'
import { SafeAreaProvider } from "react-native-safe-area-context";
import EButton from './components/EButton';
import styles from './themes/styles';
import axios from 'axios';

export default function Index(props) {
    // Modals
    const [denuncia, setDenunciaVisible] = useState(false);
    const [calendar, setCalendarVisible] = useState(false);

    //Calendario
    const [inputDate, setInputDate] = React.useState(undefined)

    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve logged-in user information
        axios.get('http://localhost:8080/user/me')
          .then((response) => {
            if (response.data) {
              setUserName(response.data.nomeCompleto);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <>
            <View style={styles.main}>
                <View style={styles.main2}>
                    <img src={logo} style={{ width: "250px", height: "250px" }} />
                </View>
                    <Text style={{ fontSize: "30px", color: "#F5E1CE" }}> Bem vindo {userName}! </Text>
                
                <TouchableOpacity 
                    style = {styles.buttonVoltar}
                    onPress={() => props.navigation.navigate('Login')}>
                    Voltar
                </TouchableOpacity>

                <Text style={{ 
                    fontSize: "25px", 
                    textAlign: 'center', 
                    margin: "20px", 
                    color: "#F5E1CE"
                }}>
                     O valor atual do condomínio é de: R$ 1500,00 
                </Text>
                
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <EButton 
                        img={require("./image/churras.png")}
                        onPress={() => setCalendarVisible(true)}
                        >
                    </EButton>
                    <EButton 
                        img={require("./image/denuncia.png")}
                        onPress={() => setDenunciaVisible(true)}
                        >
                    </EButton>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <EButton 
                        img={require("./image/boleto.png")}
                        >
                    </EButton>
                    <EButton 
                        img={require("./image/carro.png")}
                        >
                    </EButton>
                </View>

                <EButton 
                        img={require("./image/votar.png")}
                        >
                </EButton>
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
