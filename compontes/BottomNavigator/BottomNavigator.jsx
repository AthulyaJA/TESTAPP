import {
    View,
    TextInput,
    Alert,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    BackHandler,
    TouchableOpacity,
    Platform,
    Text,
    FlatList
} from "react-native";

import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../../screens/Welcome";
import Lists from "../../screens/LIst";
import ALlCat from "../../screens/AllCatgory";
import Settings from "../../screens/Settings";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {


    return (
        <Tab.Navigator


            screenOptions={
                Platform.OS === "ios"
                    ? {
                        tabBarActiveTintColor: "#D2183F",
                        // tabBarActiveBackgroundColor: "orange",
                        tabBarStyle: [
                            {
                                position: "absolute",
                                bottom: 1,
                            },
                            null,
                        ],
                    }
                    : {
                        tabBarActiveTintColor: "white",
                        borderBottomWidth: 2,
                        tabBarStyle: {
                            paddingVertical: 5,
                            //borderTopLeftRadius: 15,
                            //borderTopRightRadius: 15,
                            backgroundColor: "black",
                            position: "absolute",
                            height: 65,
                        },
                        tabBarLabelStyle: {
                            paddingBottom: 10,
                            fontSize: 12,
                        },
                    }
            }
            initialRouteName="Fee"

        > <Tab.Screen
                name="Home"
                component={Welcome}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="List"
                component={Lists}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="All_cat"
                component={ALlCat}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }}
            /></Tab.Navigator>)
}