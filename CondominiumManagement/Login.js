import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import logo from './image/logo3.png'
import { useState } from 'react';
import axios from 'axios';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#000020',
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
        backgroundColor: '#2f2c79 ',
        marginBottom: 15,
        borderRadius: 2,
        borderColor: '#f5e1ce',
        borderWidth: 1,
        color: "#f5e1ce",
        fontSize: "20px"
    },
    text:
    {
        fontSize: 22,
        color: "#f5e1ce"
    },
    buton:
    {
        backgroundColor: "#171a4a",
        borderRadius: 2,
        marginTop: 10,
        width: "85%",
        height: "10",
        borderColor: '#f5e1ce',
        borderWidth: 2
    },
    buton2:
    {
        backgroundColor: "#2f2c79",
        borderRadius: 2,
        marginTop: 10,
        width: "105px",
        height: "10",
        borderColor: '#e8c39e',
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
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        });
        async function validateLogin() {
            console.log("Email:", user.email);
            console.log("Password:", user.password);
        
            try {
                const response = await axios.post('http://localhost:8080/user/login', {
                    email: user.email,
                    password: user.password,
                });
        
                console.log("API Response:", response.data);
                
                if (user.email !== "" && user.password !== "") 
                {
                    console.log("Sucesso no Login");
                    props.navigation.navigate("Index");
                } 
                else 
                {
                    console.log("Email ou Senha vazio");
                    alert("Preencha os campos antes de tentar entrar");
                }
            } catch (error) {
                console.error("API Error:", error);
        
                if (error.response) 
                {
                    console.error("Status Code:", error.response.status);
                    console.error("Response Data:", error.response.data);
                } 
                else if (error.request) 
                {
                    console.error("No response received. Is the server running?");
                } 
                else 
                {
                    console.error("Error setting up the request:", error.message);
                }
        
                alert("Erro ao tentar fazer login. Por favor, tente novamente.");
            }
        }

    return (
        <>
            <View style={styles.main}>
                <img src={logo} style={{ width: "300px", height: "300px" }} />
                <Text style={{
                    fontFamily: 'cursive', fontSize: 30
                }}>  </Text>

                <Text style={styles.text}> Email: </Text>
                <TextInput style={styles.input} onChangeText={(text)=> setUser({...user, email: text})}/>

                <Text style={styles.text}>  Senha: </Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(text)=> setUser({...user, password: text})}/>

                <TouchableOpacity style={styles.buton2} onPress={() => {validateLogin()}}>
                    <Text style={styles.text2}> Entrar </Text>
                </TouchableOpacity>

                <View style={{ marginTop: "10%", alignItems: "center" }}>

                    <Text style={styles.text}> Não possui login? </Text>

                    <TouchableOpacity style={styles.buton} onPress={() => props.navigation.navigate("Cadastro")}>
                        <Text style={styles.text2}> Cadastre-se</Text>
                    </TouchableOpacity>
                  
                </View>

            </View>
        </>
    )

}
