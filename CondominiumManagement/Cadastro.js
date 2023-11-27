import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
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
        backgroundColor: '#e8c39e',
        marginBottom: 15,
        borderRadius: 5,
        borderColor: '#000020',
        borderWidth: 1,
        fontSize:'23px'
    },
    input2:
    {
        width: '170px',
        height: 35,
        backgroundColor: '#e8c39e',
        marginBottom: 15,
        borderRadius: 5,
        borderColor: '#000020',
        borderWidth: 1,
        margin: 10,
        fontSize:'20px'
    },
    text:
    {
        fontSize: 22,
        color: "#f5e1ce"
    },
    text2:
    {
        display: "flex",
        marginLeft: 15
    },
    buton:
    {
        backgroundColor: "#2f2c79",
        borderRadius: 5,
        marginTop: 10,
        width: "105px",
        height: "10",
        borderColor: '#f5e1ce',
        borderWidth: 2
    },
    text3: 
    {
        textAlign: "center",
        fontSize: 22,
        color: "#F2F2F2",
    }

});
export default function Cadastro(props) {
    const [user, setUser] = useState(
        {
            nomeCompleto: "",
            cpf: "",
            apartamento: "",
            bloco: "",
            email: "",
            password: ""
    });
    function EqualPassword( password,  confirmPassword)
    {
        if(password === confirmPassword){ 
            if(user.nomeCompleto != "" && user.cpf != "" && user.apartamento != "" && user.email != "" && user.password != ""){
                axios.post("http://localhost:8080/", {nomeCompleto: user.nomeCompleto, cpf: user.cpf, apartamento: user.apartamento, email: user.email, password:user.password})
                    .then ((data)=> {data.data})
                alert("usuário criado com sucesso!")
                props.navigation.navigate("Login")
            }
            else {
                alert("É necessário preencher todos os campos!")
            }
        }
        else {
            alert("As senhas não coincidem.")
        }
    }
    const [passConfirm, setPassConfirm] = useState ({ confirmPassword:""})
    return(
    <>
        <View style={styles.main}>
            <img src={logo} style={{ width: "300px"}} />  
            <Text style={styles.text}>
                Nome Completo:
            </Text>
            <TextInput style={styles.input}
                onChangeText={(text)=> setUser({...user, nomeCompleto: text})}/>

            <Text style={styles.text}> CPF: </Text>
            <TextInput style={styles.input}
                 onChangeText={(text)=> setUser({...user, cpf: text})}/>

            <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }} > 

                <View>
                    <Text style={[styles.text, styles.text2]}>
                        Apartamento:
                    </Text>
                    <TextInput style={styles.input2}
                         onChangeText={(text)=> setUser({...user, apartamento: text})}/>
                </View>
                
                <View>
                    <Text style={[styles.text, styles.text2]}>
                        Bloco:
                    </Text>
                    <TextInput style={styles.input2}
                         onChangeText={(text)=> setUser({...user, bloco: text})}/>
                </View>


            </View>

            <Text style={styles.text}>
                Email:
            </Text>
            <TextInput style={styles.input}
                 onChangeText={(text)=> setUser({...user, email: text})}/>

            <Text style={styles.text}>
                Senha:
            </Text>
            <TextInput style={styles.input}  secureTextEntry={true}
                 onChangeText={(text)=> setUser({...user, password: text})}/>

            <Text style={styles.text}>
                Confirmar Senha:
            </Text>
            <TextInput style={styles.input}  secureTextEntry={true}
                onChangeText={(text)=> setPassConfirm({...passConfirm, confirmPassword: text})}/>

            <TouchableOpacity style={styles.buton}  onPress={() => {EqualPassword(user.password, passConfirm.confirmPassword)}}>
                <Text style={styles.text3}> Cadastrar </Text> 
            </TouchableOpacity>
        </View>
    </>
    )
}