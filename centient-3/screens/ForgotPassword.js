import {StyleSheet, Text, View, Image, TouchableOpacity, Alert,} from 'react-native';
import {Formik} from 'formik';

import {Input} from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";


function ForgotPassword({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('../assets/IMG_0008.jpg')}/>
            <Formik
                initialValues={{
                    email: '',
                    user: '',
                    password: '',
                }}
                onSubmit={values => {
                    forgotPass(values)
                }}>
                {props => (
                    <View>
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
                        <TouchableOpacity style={styles.submitButton} onPress={() => props.handleSubmit}>
                            <Text style={styles.textStyles}>R E S E T P A S S W O R D</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}


export default ForgotPassword;

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
