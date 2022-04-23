import React, {useState} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as authAction from '../redux/actions/authAction';
import {Input} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    user: Yup.string().max(10, 'Invalid User'),
    password: Yup.string().required('Required').min(6, 'Must have at least 6 characters!').max(25, 'At most 25 characters allowed!'),
})

export default function SignUp({navigation}) {
    const dispatch = useDispatch();
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
                    email: '',
                    user: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    authAction.signup(values)
                }}>
                {props => (
                    <KeyboardAvoidingView>
                        <Input
                            style={styles.textStyles}
                            placeholder="E M A I L"
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                            rightIcon={
                                !props.errors.email && props.values.email ? (
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color={'#19ff00'}
                                            size={20}
                                        />
                                    </Animatable.View>
                                ) : null
                            }
                            errorMessage={props.touched.email && props.errors.email}
                        />
                        <KeyboardAvoidingView>
                            <Input
                                style={styles.textStyles}
                                placeholder="U S E R"
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
                        </KeyboardAvoidingView>
                        <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                            <Text style={styles.textStyles}>S I G N U P </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
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
        color: "black",
        fontFamily: "Verdana-Bold",
        fontWeight: "bold",
        fontSize: 18
    }
});


