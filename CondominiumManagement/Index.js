import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground  } from 'react-native';
import logo from './image/logo.png'

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F2F2F2',
        margin: 1,
        width: '100%',
        height: '100%',
        borderColor: '#D9B1AD',
        borderWidth: 2,
        padding: 10,
        margin: 2
    },
    main2: {
        display: 'flex',
        flexDirection:"row",
        justifyContent:"flex-direction",
    }

})

export default function Index(props) {
    return(
        <>
            <View style={styles.main}>
                <View style={styles.main2}>
                    <img src={logo} style={{ width: "150px", height: "150px" }} />
                    <Text style = {{fontSize: "30px"}}> Bem vindo s/n! </Text>
                </View>
                <ImageBackground
                    source = {require('./image/churras.png')}
                    style={{width:250, height: 150, borderRadius:"25px"}}
                />
            </View>
        </>
    )
}