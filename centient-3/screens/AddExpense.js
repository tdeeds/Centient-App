import {StyleSheet, Image, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {Input} from "react-native-elements";

async function add(values) {

}

const AddExpenseSchema = Yup.object().shape({
    category: Yup.string().required('Must have an expense category'),
    amount: Yup.number().required('Expense amount')
})

export default function AddExpense({navigation}) {

    return (
        <View style={styles.container}>
            <Image style={styles.background} source={require('../assets/IMG_0008.jpg')}/>
            <Formik
                initialValues={{
                    category: '',
                    amount: ''
                }}
                validationSchema={AddExpenseSchema}
                onSubmit={values => {
                    add(values)
                }}>
                {props => (
                    <View>
                        <Input
                            style={styles.textStyles}
                            placeholder="Expense Category "
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            onBlur={props.handleBlur('category')}
                            errorMessage={props.touched.category && props.errors.category}
                        />
                        <Input
                            style={styles.textStyles}
                            placeholder="Expense Amount "
                            placeholderTextColor="#ffffff"
                            onChangeText={props.handleChange('amount')}
                            value={props.values.amount}
                            onBlur={props.handleBlur('amount')}
                            errorMessage={props.touched.amount && props.errors.amount}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    textStyles: {

        color: "#ffff",
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Verdana-Bold"
    },
})
