import React from "react";
import {View, StyleSheet} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from "../Components/context";


export function DrawerContent(props) {
const {signOut} = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Test</Text>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="exit-to-app"
                              color={color}
                              size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => signOut()}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
