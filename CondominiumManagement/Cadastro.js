import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './image/logo2.png'

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
    input2:
    {
        width: '170px',
        height: 35,
        backgroundColor: '#D9C1BB',
        marginBottom: 15,
        borderRadius: 5,
        borderColor: '#595859',
        borderWidth: 1,
        margin: 10
    },
    text:
    {
        fontSize: 22,
        color: "#595859"
    },
    text2:
    {
        display: "flex",
        marginLeft: 15
    },
    buton:
    {
        backgroundColor: "#d9b1ad",
        borderRadius: 5,
        marginTop: 10,
        width: "105px",
        height: "10",
        borderColor: '#595859',
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