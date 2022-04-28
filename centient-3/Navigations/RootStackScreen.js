import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUp';
import ForgotPassword from "../screens/ForgotPassword";
import Information from "../screens/Information";
import Tracking from "../screens/Tracking";


const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen options={{headerShown: false}} name="SignInScreen" component={LoginScreen}/>
        <RootStack.Screen options={{headerShown: false}} name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword}/>
        <RootStack.Screen options={{headerShown: false}} name="Information" component={Information}/>
        <RootStack.Screen options={{headerShown: false}} name="Tracking" component={Tracking}/>


    </RootStack.Navigator>
);

export default RootStackScreen;
