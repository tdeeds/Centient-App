import {Provider, useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
            <App/>
        </Provider>
    );
};

function App() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const loading = useSelector(state => state.loading);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
                <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
                <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpense}/>
                <Stack.Screen options={{headerShown: false}} name="Information" component={Information}/>
                <Stack.Screen options={{headerShown: false}} name="Tracking" component={Tracking}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppWrapper;

