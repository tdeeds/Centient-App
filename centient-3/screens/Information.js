import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';


const InfoSchema = Yup.object().shape({
    age: Yup.number().required('Must Input Age'),
    location: Yup.string().required('Must Input Location'),
    income: Yup.number().required('Required'),
})

export default function Information({navigation}) {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('../assets/IMG_0008.jpg')}/>
            <Formik
                initialValues={{
                    email: '',
                    user: '',
                    password: ''
                }}
                validationSchema={InfoSchema}
                onSubmit={values => {
                    dispatch(budgetAction.getInfo(values))
                }}>
                {props => (
                    <View>
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
                            placeholder="Enter Location"
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('location')}
                            value={props.values.location}
                            onBlur={props.handleBlur('location')}
                            rightIcon={
                                !props.errors.location && props.values.location ? (
                                    <Animatable.View animation="bounceIn">
                                        <Feather
                                            name="check-circle"
                                            color={'#19ff00'}
                                            size={20}
                                        />
                                    </Animatable.View>
                                ) : null
                            }
                            errorMessage={props.touched.location && props.errors.location}
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
                        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Tracking')}>
                            <Text style={styles.textStyles}>N E X T</Text>
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
        fontFamily: "Verdana-Bold"
    }
})
