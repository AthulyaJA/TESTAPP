import React, { useState, useEffect, useRef, useContext, useMemo } from "react";

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
    Text
} from "react-native";
import CommonStyles from "../styles/commonStyle";
import NavBar from "../compontes/NavBar/NavBar";
import TopTabSection from "./TopTabSection";
import BottomCardSection from "./BottomCardSection";
import ChartData from "./ChartData";


export default function Welcome() {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const onChangeValue = (e, field_name, field_value) => {

    };



    return (
        <>
            <SafeAreaView style={CommonStyles.container}>
                <NavBar title="Statistics" />
                <View style={CommonStyles.align_center}>

                    <TopTabSection
                    />
                    {/* <ChartData /> */}

                    <BottomCardSection />


                </View>

            </SafeAreaView>
        </>
    )
}