import { Text,TouchableOpacity, ImageBackground  } from 'react-native'

import styles from '../themes/styles'

export default function EButton(props) {
    
    return(
            <TouchableOpacity style={[styles.viewAll, { backgroundColor: props.cor }]} onPress={() => props.onPress()}>
                <ImageBackground
                    source={props.img}
                    style={props.style ? props.style : styles.img1}
                    
                />
                <Text style={props.text ? props.text : styles.text}>{props.nome}</Text>
            </TouchableOpacity>
        
    )
}