import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, SafeAreaView, View, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
    Ionicons,
    AntDesign,
    FontAwesome5,
    Foundation,
    MaterialCommunityIcons,
    FontAwesome
} from "@expo/vector-icons";
import CommonStyles from "../../styles/commonStyle";

export default function NavBar(props) {
    console.log(props, "asgdfag")

    return (<>
        <StatusBar />
        <SafeAreaView
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                flexWrap: "wrap",
            }}
        >
            <View style={{
                justifyContent: "space-between"
            }}>
                <Text
                    style={CommonStyles.top_nav_heading}


                >{props?.title}

                </Text>
                <Entypo name="dots-three-vertical" size={24} color="black" />

            </View>


        </SafeAreaView></>)
}