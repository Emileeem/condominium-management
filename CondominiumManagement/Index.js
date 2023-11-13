import { StyleSheet, Text, View, TextInput } from 'react-native';
import logo from './image/logo.png'

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#F2DFDF',
      margin: 1,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems:"center"
    },
    input : 
    {
        width: '95%',
        height: 35,
        backgroundColor:'#D9C1BB',
        marginBottom: 15,
        borderRadius: 5,
        borderColor: '#595859',
        borderWidth: 1
    }
    
  });

export default function Index(props){

    
    
    return (
    <>
        <View style = {styles.main}>
            <img src={logo} style = {{width:"300px", height: "300px"}}/>
            <Text style = {{
                fontFamily: 'cursive', fontSize: 30
            }}>  </Text>

            <Text> Email: </Text>
            <TextInput style = {styles.input}>
            </TextInput>
            <Text>  Senha: </Text>
            <TextInput style = {styles.input}>
            </TextInput>
            
        </View>
    </>
    )
      
}
