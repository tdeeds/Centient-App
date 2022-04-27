import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from "react";


export default function Tracking({navigation}) {
    const [category, setCategory] = useState([]);
    const onPress = (newCategory) => {
        setCategory(category => [...category, newCategory]);
        console.log(newCategory);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitButton} onPress={onPress}>
                <Text style={styles.textStyles}>Housing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={onPress}>
                <Text style={styles.textStyles}>Utilities</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: "center"
    },
    submitButton: {
        marginLeft: "10%",
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ffff",
    },
    textStyles: {
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Verdana-Bold"
    }
})

