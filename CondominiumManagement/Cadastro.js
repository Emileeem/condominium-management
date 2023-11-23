import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './image/logo3.png'

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
    return(
    <>
        <View style={styles.main}>
            <img src={logo} style={{ width: "300px"}} />  
            <Text style={styles.text}>
                Nome Completo:
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}> CPF: </Text>
            <TextInput style={styles.input}/>

            <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }} > 

                <View>
                    <Text style={[styles.text, styles.text2]}>
                        Apartamento:
                    </Text>
                    <TextInput style={styles.input2}/>
                </View>
                
                <View>
                    <Text style={[styles.text, styles.text2]}>
                        Bloco:
                    </Text>
                    <TextInput style={styles.input2}/>
                </View>


            </View>

            <Text style={styles.text}>
                Email:
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
                Senha:
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
                Confirmar Senha:
            </Text>
            <TextInput style={styles.input}/>

            <TouchableOpacity style={styles.buton}  onPress={() => props.navigation.navigate("IndexAdm")}> 
                <Text style={styles.text3}> Cadastrar </Text> 
            </TouchableOpacity>
        </View>
    </>
    )
}