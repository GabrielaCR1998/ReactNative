import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="java"
                onPress={()=>navigation.navigate('DetailsScreen')}
            />
            <Button 
                title="React"
                onPress={()=>navigation.navigate('AnotherScreen')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B4F2F7',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});