import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import {useDispatch, useSelector} from "react-redux";

export function DrawerContent(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);


    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>

            </DrawerContentScrollView>
        </View>
    )
}
