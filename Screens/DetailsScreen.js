import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.png' }}
            style = {{width: 300, height: 280}}/>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});