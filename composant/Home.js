import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center', marginTop: 300}}>BIENVENUE !</Text>
            <StatusBar style="auto" />
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7BDE2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        color:"black",
        fontWeight: 'bold',
        fontSize: 50,
    },
});
