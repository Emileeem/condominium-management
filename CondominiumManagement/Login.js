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
        
            await axios.get(`http://localhost:8080/user/${user.email}/${user.password}`)
            .then((response) => {
                console.log("API Response:", response.data);
        
                const infoUser = response.data;
        
                if (user.email !== "" && user.password !== "") {
                    if (infoUser && infoUser.email === user.email && infoUser.password === user.password) {
                        console.log("Login Successful");
                        props.navigation.navigate("Index");
                    } else {
                        console.log("Invalid User");
                        alert("Usuário não encontrado!");
                    }
                } else {
                    console.log("Empty Email or Password");
                    alert("Preencha os campos antes de tentar entrar");
                }
            })
            .catch((error) => {
                console.error("API Error:", error);
        
                if (error.response) {
                    // A resposta foi recebida, mas o servidor retornou um código de status diferente de 2xx
                    console.error("Status Code:", error.response.status);
                    console.error("Response Data:", error.response.data);
                } else if (error.request) {
                    // A solicitação foi feita, mas não houve resposta do servidor
                    console.error("No response received. Is the server running?");
                } else {
                    // Algo aconteceu ao configurar a solicitação que acionou um erro
                    console.error("Error setting up the request:", error.message);
                }
        
                alert("Erro ao tentar fazer login. Por favor, tente novamente.");
            });
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
