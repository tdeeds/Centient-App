import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "./screens/ForgotPassword";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import AddExpense from "./screens/AddExpense";
import Information from "./screens/Information";
import Tracking from "./screens/Tracking";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddExpense" component={AddExpense} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Tracking" component={Tracking} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;

