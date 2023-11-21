import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './image/logo.png'

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F2DFDF',
        margin: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: "center"
    },
    input:
    {
        width: '360px',
        height: 35,
        backgroundColor: '#D9C1BB',
        marginBottom: 15,
        borderRadius: 5,
        borderColor: '#595859',
        borderWidth: 1
    },
    text:
    {
        fontSize: 22,
        color: "#595859"
    },
    buton:
    {
        backgroundColor: "#595859",
        borderRadius: 5,
        marginTop: 10,
        width: "85%",
        height: "10",
        borderColor: '#D9B1AD',
        borderWidth: 2
    },
    buton2:
    {
        backgroundColor: "#d9b1ad",
        borderRadius: 5,
        marginTop: 10,
        width: "105px",
        height: "10",
        borderColor: '#595859',
        borderWidth: 2
    },
    text2: 
    {
        textAlign: "center",
        fontSize: 22,
        color: "#F2F2F2",
    }

});

export default function Login(props) {
    function goToUsuarios(){
        SetUtils({...utils, email:email, senha:senha})
        props.navigation.navigate('Cadastro')
    }

    return (
        <>
            <View style={styles.main}>
                <img src={logo} style={{ width: "300px", height: "300px" }} />
                <Text style={{
                    fontFamily: 'cursive', fontSize: 30
                }}>  </Text>

                <Text style={styles.text}> Email: </Text>
                <TextInput style={styles.input}/>

                <Text style={styles.text}>  Senha: </Text>
                <TextInput style={styles.input} secureTextEntry = {true}/>

                <TouchableOpacity style={styles.buton2}  onPress={() => props.navigation.navigate("Index")}> 
                    <Text style={styles.text2}> Entrar </Text> 
                </TouchableOpacity>

                <View style={{ marginTop: "10%", alignItems: "center" }}>

                    <Text style={styles.text}> Não possui login? </Text>

                    <TouchableOpacity style={styles.buton}  onPress={() => props.navigation.navigate("Denuncias")}> 
                        <Text style={styles.text2}> Cadastre-se</Text> 
                    </TouchableOpacity>

                </View>

            </View>
        </>
    )

}
