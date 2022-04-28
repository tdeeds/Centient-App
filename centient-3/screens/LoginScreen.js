import {Pressable, Image, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Alert} from "react-native";
import React, {useState} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import {Input} from "react-native-elements";
import {AuthContext} from "../Components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function login(authData) {
    const {user, password} = authData;
    try {
        const result = await fetch(`http://10.252.178.91:8080/api/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": user,
                "password": password
            }),
        });
        const resultData = await result.json();
        if (!resultData.error) {
            console.log('success');
        } else {
            Alert.alert(
                "ERROR",
                "Incorrect User or Password"
            )
            console.log('error')
        }
        console.log("Result Data" + resultData);
        return resultData;
    } catch (e) {
        Alert.alert(
            "ERROR",
            "Incorrect User or Password"
        )
    }
}

const LoginSchema = Yup.object().shape({
    user: Yup.string().max(10, 'Short usernames only amigo').required('Required'),
    password: Yup.string().required('Required').min(6, 'Must have at least 6 characters!').max(25, 'At most 25 characters allowed!'),
})

function LoginScreen({navigation}) {
    const {signIn} = React.useContext(AuthContext)
    const [data, setData] = useState({
        secureTextEntry: false,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image style={styles.background} source={require('../assets/IMG_0008.jpg')}/>
            <Formik
                initialValues={{
                    user: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={values => {
                    login(values)
                        .then(async result => {
                            try {
                                if (result !== undefined){
                                    signIn();
                                    console.log(result)
                                    await AsyncStorage.setItem(
                                        'userData',
                                        JSON.stringify(result),
                                    );
                                }
                                else {
                                    console.log("error");
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
                            placeholder="U S E R "
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
                            password={true}
                            placeholder="P A S S W O R D"
                            placeholderTextColor="#ffffff"
                            secureTextEntry={!data.secureTextEntry}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            onBlur={props.handleBlur('password')}
                            rightIcon={
                                <View>
                                    <TouchableOpacity onPress={updateSecureTextEntry}>
                                        <Feather
                                            name={data.secureTextEntry ? 'eye-off' : 'eye'}
                                            color={'#19ff01'}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                    {!props.errors.password && props.values.password ? (
                                        <Animatable.View animation="bounceIn">
                                            <Feather
                                                name="check-circle"
                                                color={'#19ff01'}
                                                size={20}
                                            />
                                        </Animatable.View>
                                    ) : null}
                                </View>
                            }
                            errorMessage={props.touched.password && props.errors.password}
                        />
                        <TouchableOpacity>
                            <Pressable style={styles.forgot_button}
                                       onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={styles.textStyles1}> Forgot Password? </Text>
                            </Pressable>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.login} onPress={props.handleSubmit}>
                            <Text style={styles.textStyles1}>L O G I N</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.textStyles}> S I G N U P</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: "center"
    },
    background: {
        flex: .3,
        width: '100%',
        height: '100%',
        marginBottom: 30
    },
    login: {
        marginLeft: "10%",
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    signUp: {
        marginLeft: "52%",
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -50,
        backgroundColor: "#ffffff",
    },
    forgot_button: {
        marginTop: -5,
        alignItems: "center",
        marginBottom: 30,
    },
    textStyles: {
        color: "black",
        fontFamily: "Verdana-Bold",
        fontWeight: "bold",
        fontSize: 17
    },
    textStyles1: {
        color: "white",
        fontFamily: "Verdana-Bold",
        fontWeight: "bold",
        fontSize: 17
    }
});


