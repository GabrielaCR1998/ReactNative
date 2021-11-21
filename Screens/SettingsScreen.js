import React from 'react'
import { StyleSheet, Text, View, Image,} from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Image source = {{uri: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png' }}
            style = {{width: 300, height: 280}}/>
            <Text>  
                <Text style={{fontWeight: "bold", fontSize: 30, }}> GabrielaCR1998 </Text>
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