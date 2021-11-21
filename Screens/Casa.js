import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

export default function Casa() {
    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://gifimage.net/wp-content/uploads/2017/10/happy-emoticon-gif-3.gif' }}
            style = {{width: 350, height: 280}}/>
            <Text>  
                <Text style={{fontWeight: "bold", fontSize: 35}}> Bienvenida a mi Programa </Text>
                {"\n"}{"\n"}
                <Text style={{fontSize: 20, }}> Perdon por el retraso :c pero es que no me salia </Text>
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
});