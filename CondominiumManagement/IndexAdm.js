import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import logo from './image/logo.png'
import { horizontalScale, moderateScale, verticalScale } from './Metrics';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F2F2F2',
        margin: 1,
        width: '100%',
        height: '100%',
        borderColor: '#D9B1AD',
        borderWidth: 2,
        padding: 10,
        margin: "1%"
    },
    main2: {
        display: 'flex',
        flexDirection:"row",
        justifyContent:"flex-direction",
    },
    viewAll : {
        backgroundColor: "#D9B1AD",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#595859",
        width: horizontalScale(354),
        height: verticalScale(110),
        marginLeft: "2%",
        marginBottom: "2%"
    },
    text: {
        textAlign: "center",
        fontSize: "20px",
        color: "#000",
        display: "flex",
        top: "-60PX",
        left: "25PX"
    },
    text2: {
        textAlign: "center",
        fontSize: "20px",
        color: "#FFF",
        display: "flex",
        left: "95px",
        top: "25px"
    },
    img1: 
    {
        width: '100px', 
        height: '100px', 
        display: 'flex', 
        left: "70%"
    },
    img2:
    {
        width: '100px', 
        height: '100px', 
        bottom: "45px"
    }

})

export default function IndexAdm(props) {
    return(
        <>
            <View style={styles.main}>
                <View style={styles.main2}>
                    <img src={logo} style={{ width: horizontalScale(150), height: verticalScale(150) }} />
                    <Text style = {{fontSize: "30px"}}> Bem vindo s/n! </Text>
                </View>

                <Text style = {{fontSize: "25px", textAlign: 'center', margin: "20px"}}> 
                    O valor atual do condomínio é de: <TextInput/>
                </Text>

                <TouchableOpacity style={[styles.viewAll , { backgroundColor: "#4bb8b6"}]}>
                    <ImageBackground
                        source = {require('./image/churras.png')}
                        style={styles.img1}
                    />
                    <Text style = {styles.text}> Ver Reservas </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#c43333"}]}>
                    <Text  style = {styles.text2}> Ver Denuncias </Text>
                    <ImageBackground
                        source = {require('./image/denuncia.png.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#ebe86c"}]}>
                    <ImageBackground
                        source = {require('./image/votar.png')}
                        style={styles.img1}
                    />
                    <Text style = {styles.text}> Ver Votações </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#674d9e"}]}>
                    <Text style = {styles.text2}> Vaga de estacionamento </Text>
                    <ImageBackground
                        source = {require('./image/carro.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#f065e6"}]}>
                    <ImageBackground
                        source = {require('./image/social.png')}
                        style={styles.img1}
                    />
                    <Text style = {styles.text}> Visitantes </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#4a2d04"}]}>
                    <Text style = {styles.text2}> Agendar Assembléias </Text>
                    <ImageBackground
                        source = {require('./image/maos.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>
             
                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#fc7e08"}]}>
                    <ImageBackground
                        source = {require('./image/ap.png')}
                        style={styles.img1}
                    />
                    <Text style = {styles.text}> Apartamentos </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.viewAll, { backgroundColor: "#918f8d"}]}>
                    <Text style = {styles.text2}> Coleta de Lixos </Text>
                    <ImageBackground
                        source = {require('./image/lixo.png')}
                        style={styles.img2}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}