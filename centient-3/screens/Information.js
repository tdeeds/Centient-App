import * as Yup from 'yup';
import {Formik} from 'formik';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";


async function getInfo(authData) {
    const {use, age, income , location} = authData;
    try {
        const result = await fetch(`http://10.252.178.91:8080/api/information`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": user,
                "age": age,
                "income": income,
                "location": location
            }),
        });
        const resultData = await result.json();
        if (!resultData.error) {
            console.log('success');
        } else {
            Alert.alert(
                "ERROR",
                "Incorrect User"
            )
            console.log('error')
        }
        console.log("Result Data" + resultData);
        return resultData;
    } catch (e) {
        Alert.alert(
            "ERROR",
            "Incorrect User"
        )
    }
}

const InfoSchema = Yup.object().shape({
    user: Yup.string().required('Input User'),
    age: Yup.number().required('Must Input Age'),
    income: Yup.number().required('Must Input Income'),
})

export default function Information({navigation}) {

    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('../assets/IMG_0008.jpg')}/>
            <Formik
                initialValues={{
                    user: '',
                    age: '',
                    income: ''
                }}
                validationSchema={InfoSchema}
                onSubmit={values => {
                    getInfo(values)
                        .then(async result => {
                            try {
                                if (result !== 'error') {
                                    console.log(result)
                                    await AsyncStorage.setItem(
                                        'userData',
                                        JSON.stringify(result),
                                    );
                                    navigation.navigate('Tracking');
                                }
                            } catch (err) {
                                console.log(err);
                            }
                        })
                }}>
                {props => (
                    <View>
                        <Input
                            style={styles.textStyles}
                            placeholder="Re-Enter User"
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('user')}
                            value={props.values.user}
                            onBlur={props.handleBlur('user')}
                            rightIcon={
                                !props.errors.user && props.values.user ? (
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color={'#19ff00'}
                                            size={20}
                                        />
                                    </Animatable.View>
                                ) : null
                            }
                            errorMessage={props.touched.user && props.errors.user}
                        />
                        <Input
                            style={styles.textStyles}
                            placeholder="Enter Age"
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('age')}
                            value={props.values.age}
                            onBlur={props.handleBlur('age')}
                            rightIcon={
                                !props.errors.age && props.values.age ? (
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color={'#19ff00'}
                                            size={20}
                                        />
                                    </Animatable.View>
                                ) : null
                            }
                            errorMessage={props.touched.age && props.errors.age}
                        />
                        <Input
                            style={styles.textStyles}
                            placeholder="Enter Income"
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('income')}
                            value={props.values.income}
                            onBlur={props.handleBlur('income')}
                            rightIcon={
                                !props.errors.income && props.values.income ? (
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color={'#19ff00'}
                                            size={20}
                                        />
                                    </Animatable.View>
                                ) : null
                            }
                            errorMessage={props.touched.income && props.errors.income}
                        />
                        <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                            <Text style={styles.textStyles2}>N E X T</Text>
                        </TouchableOpacity>
                    </View>
                )
                }
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: "center"
    },
    background: {
        flex: .3,
        width: '100%',
        height: '100%'
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
        fontFamily: "Verdana-Bold",
        color: "white"
    },
    textStyles2: {
        color: "black",
        fontFamily: "Verdana-Bold",
        fontWeight: "bold",
        fontSize: 18
    }
})
