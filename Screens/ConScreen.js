import React from 'react'
import { StyleSheet, Text, View, Image,} from 'react-native'

export default function ConScreen() {
    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://i.stack.imgur.com/joZtU.jpg' }}
            style = {{width: 100, height: 180}}/>
            <Text>  
                <Text style={{fontWeight: "bold", fontSize: 30, }}> Profe, no pude realizar el apartado de contacto, me salia este error, pero adjunto capturas del codigo que hice, estan en el PDF </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16F4F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
});