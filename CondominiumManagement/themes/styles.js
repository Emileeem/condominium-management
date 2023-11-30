import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#2F2C79',
        margin: 1,
        width: '100%',
        height: '100%',
        margin: "1%",
        alignContent: "center",
        alignItems: "center"
    },
    main2: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-direction",
    },
    viewAll: {
        backgroundColor: "#D9B1AD",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#e8c39e",
        width: "150px",
        height: "150px",
        marginLeft: "1%",
        marginBottom: "2%",
    },
    text: {
        textAlign: "center",
        fontSize: "20px",
        color: "#000",
        display: "flex",
        top: "-80PX",
        left: "25PX",
        width: "50px",
        textAlign: "left"
    },
    text2: {
        textAlign: "center",
        fontSize: "20px",
        color: "#FFF",
        display: "flex",
        left: "115px",
        top: "25px",
        width: "50px",
        textAlign: "left"
    },
    img1:
    {
        width: '100px',
        height: '100px',
        display: 'flex',
        left: '12%',
        top: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'red',
        position: "relative",
        bottom: "105%",
        left: "59%"
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: "25px",
        marginBottom: "15px",
        color: "red",
        textAlign: "center"
    },
    enviar: {
        width: "105px",
        height: "45px",
        backgroundColor: "#595859",
        borderRadius: "20px",
        top: "15%"
    },
    assunto: {
        fontSize: "18px"
    },
    input: {
        borderColor: "#595859",
        borderWidth: 2,
        height: "35px",
        width: "275px",
        margin: "1%",
        color: '#F5E1CE',
        fontSize: 20
    },
    input2: {
        borderColor: "#595859",
        borderWidth: 2,
        height: "95px",
        width: "275px",
        margin: "1%"
    },
    buttonVoltar: {
        backgroundColor: "#F5E1CE", 
        width: "20%", 
        margin: 5, 
        borderRadius: 15, 
        textAlign: 'center', 
        color: '#000020', 
        fontSize: 20
    }
})


export default styles;