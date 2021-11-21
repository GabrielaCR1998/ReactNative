import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={[styles.container,styles.estilo]}>
            <Text>
                 <Text style={{fontWeight: "bold", fontSize: 30}}> INFORMACIÓN DEL ALUMNO: </Text>
                 {"\n"}{"\n"}
                 <Text style={{fontSize: 20, }}> Gabriela Cruz Ramirez - 18212060 - TICS </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

estilo:{
    backgroundColor:'#4AA3FD'
}
});

