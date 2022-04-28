import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import RootStackScreen from "./Navigations/RootStackScreen";
import Home from "./screens/Home";
import AddExpense from "./screens/AddExpense";
import {DrawerContent} from "./Navigations/DrawerContent";
import {useEffect} from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "./Components/context";

React.createContext();


const Drawer = createDrawerNavigator();


const App = () => {
    const [token, setToken] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const authContext = React.useMemo(() => ({
        signIn: async () => {
            let tmpData;
            tmpData = await AsyncStorage.getItem('userData');
            if (tmpData) {
                setLoading(false);
                setToken(tmpData);
            }
        },
        signOut: async () => {
            setLoading(false);
            setToken(null);
        }
    }));


    useEffect(() => {
        setTimeout(async () => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {token != null ? (
                    <Drawer.Navigator
                        initialRouteName={'Home'}
                        headerMode="none"
                        drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="Home" component={Home}/>
                        <Drawer.Screen name="AddExpense" component={AddExpense}/>
                    </Drawer.Navigator>
                ) : (
                    <RootStackScreen/>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;

