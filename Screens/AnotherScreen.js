import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

const AnotherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://coder.clothing/images/stories/virtuemart/product/react-logo.png' }}
            style = {{width: 250, height: 280}}/>
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});