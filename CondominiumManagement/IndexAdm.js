import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Pressable} from 'react-native';
import logo from './image/logo3.png'
import EButton from './components/EButton';
import styles from './themes/styles';
import axios from 'axios';

export default function IndexAdm(props) {
    return(
        <>
            <View style={styles.main}>
                <View style={styles.main2}>
                    <img src={logo} style={{ width: "300px", height: "300px" }} />
                </View>
                    <Text style = {{fontSize: "30px", color: '#F5E1CE'}}> Bem vindo! </Text>

                <TouchableOpacity 
                    style = {styles.buttonVoltar}
                    onPress={() => props.navigation.navigate('Login')}>
                    Voltar
                </TouchableOpacity>
                <Text style = {{fontSize: "25px", textAlign: 'center', margin: "20px", color: '#F5E1CE'}}> 
                    O valor atual do condomínio é de: <TextInput style={styles.input}/>
                    <TouchableOpacity style = {styles.press}> 
                        <Text style={{fontSize: "20px", color: "white"}}>Enviar</Text> 
                    </TouchableOpacity>
                </Text>

                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <EButton 
                        img={require("./image/churras.png")}
                        onPress={() => props.navigation.navigate('Reservas')}
                        >
                    </EButton>
                    <EButton 
                        img={require("./image/denuncia.png")}
                        onPress={() =>props.navigation.navigate('Denuncias')}
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

                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <EButton 
                            img={require("./image/votar.png")}
                            >
                    </EButton>
                    <EButton 
                        img={require("./image/social.png")}
                        >
                    </EButton>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row'}}>
                    <EButton 
                            img={require("./image/maos.png")}
                            >
                    </EButton>
                    <EButton 
                        img={require("./image/ap.png")}
                        >
                    </EButton>
                </View>
                
                <EButton 
                        img={require("./image/lixo.png")}
                        >
                </EButton>
            </View>
        </>
    )
}