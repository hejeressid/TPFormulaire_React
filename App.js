import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./composant/Home";
import SignIn from "./composant/SignIn";
import SignUp from "./composant/SignUp";
import React from 'react';
export default function App() {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}/>
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}/>
                <Stack.Screen
                    name="Home"
                    component={Home }/>
            </Stack.Navigator>
        </NavigationContainer>
     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
