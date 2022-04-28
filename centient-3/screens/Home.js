import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Animatable from 'react-native-animatable';
import AddExpense from "./AddExpense";
import React from "react";


export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.navigate('AddExpense')}
                title="Go to notifications"
            />
            <Animatable.Image
                animation="bounceIn"
                duration={1500}
                source={require('../assets/Happy-removebg-preview.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textStyles}>L O G I N</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.addExpense} onPress={() => navigation.navigate('AddExpense')}>
                    <Image source={require('../assets/plus.jpg')} style={styles.plus}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: "center",
        alignItems: "center"
    },
    plus: {
        resizeMode: "contain",
        height: 50,
        width: 50
    },
    submitButton: {
        borderRadius: 225,
        height: "10%",
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: "#ffff"
    },
    addExpense: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'white',
        width: 75,
        height: '35%',
        borderRadius: 25,
        marginTop: 10
    },
    textStyles: {
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Verdana-Bold"
    },
    logo: {
        marginBottom: 30,
        marginTop: 100,
        height: 300,
        width: 500
    }
});
