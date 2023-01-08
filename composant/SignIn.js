import React from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation()
    const Connecter = () => {
        if (email == "hejer.nouira@gmail.com" && password == "hejer123") {
            navigation.navigate("Home")
        } else {
            Alert.alert("verifier les champs , erronés!")
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/sign.png")}/>
            <TextInput style={styles.TextInput}
                       keyboardType='email-address'
                       placeholder="Email"
                       placeholderTextColor="#003f5c"
                       onChangeText={(email) => setEmail(email)}/>
            <TextInput style={styles.TextInput}
                       keyboardType='visible-password'
                       placeholder="Password"
                       placeholderTextColor="#003f5c"
                       secureTextEntry={true}
                       onChangeText={(password) => setPassword(password)}/>
            <TouchableOpacity
                style={styles.button}
                onPress={Connecter}>
                <Text style={styles.Text}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginTop: 50}}
                onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.Text} >Vous n'avez pas de compte ?</Text>
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
        borderRadius: 50
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
        fontSize: 22,
    },
});