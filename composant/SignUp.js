import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
export default function SignUp() {
    const [Name, setName] = useState('')
    const [Prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const navigation = useNavigation()
    const inscrire = () => {
        if (email != "" && password != "" && address != "" && Name != "" && Prenom != "") {
            navigation.navigate("Home")
        } else {
            Alert.alert("Veuillez remplir tous les champs !!")
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/sign.png")}/>
            <TextInput style={styles.TextInput}
                       keyboardType='default'
                       placeholder="Nom"
                       placeholderTextColor="#003f5c"
                       onChangeText={(Name) => setName(Name)}/>
            <TextInput style={styles.TextInput}
                       keyboardType='default'
                       placeholder="Prénom"
                       placeholderTextColor="#003f5c"
                       onChangeText={(Prenom) => setPrenom(Prenom)}/>
            <TextInput style={styles.TextInput}
                       keyboardType='email-address'
                       placeholder="Email"
                       placeholderTextColor="#003f5c"
                       onChangeText={(email) => setEmail(email)}/>
            <TextInput style={styles.TextInput}
                       keyboardType='visible-password'
                       placeholder="Mot de passe"
                       placeholderTextColor="#003f5c"
                       secureTextEntry={true}
                       onChangeText={(password) => setPassword(password)}/>
            <TextInput style={styles.TextInput}
                       keyboardType='default'
                       placeholder="Adresse"
                       placeholderTextColor="#003f5c"
                       onChangeText={(address) => setAddress(address)}/>
            <TouchableOpacity
                style={styles.button}
                onPress={inscrire}>
                <Text style={styles.Text}>S'inscrire</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginTop: 50}}
                onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.Text}>Vous avez déja un compte ?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c5bde2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        marginTop: 50,
        borderColor: '#6C3483',
        backgroundColor: '#EBDEF0',
        borderWidth: 2,
        width: '90%',
        padding: 10,
        borderRadius: 25
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginTop: 50
    },
    button: {
        marginTop: 50,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#4A235A',
        padding: 20,
        backgroundColor: '#c5bde2',
    },
    Text:{
        color:"black",
        fontWeight: 'bold',
        fontSize: 20,
    },
});