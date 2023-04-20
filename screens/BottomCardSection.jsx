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
import CommonStyles from "../styles/commonStyle";
import { useState } from "react";


export default function BottomCardSection() {

    const data_tab = [{
        id: 1,
        section_name: "Insurance",
        text_data: "moooooo",
        checked: false,
        paid: "2000"

    },
    {
        id: 2,
        section_name: "Tax",
        text_data: "mooo",
        checked: true,
        paid: "2000"

    },

    ]
    const [data, setData] = useState(data_tab)

    const active_data = (id, index) => {
        console.log(id, "ascajsg")

        let all_data = [...data_tab]
        all_data[index].checked = !all_data[index]?.checked;
        setData(all_data)
    }

    const renderItem_data = ({ item, index }) => {
        return <>
            <View
                style={item?.checked == true ? CommonStyles.cardbody_one : CommonStyles.cardbody_two}
            >
                <Text>#{item?.text_data}</Text>
                <Text>{item?.section_name}</Text>

                <View
                    style={item?.checked == true ? CommonStyles.tab_view_bottom_3 : CommonStyles.tab_view_bottom}>
                    <Text style={CommonStyles.title_}>
                        {item?.paid}
                    </Text>

                </View>

            </View>

        </>
    }
    return (
        <>

            <View>
                <View style={CommonStyles.view_distance}>
                    <Text style={CommonStyles.title}>Templates{"   "}

                        <Text style={CommonStyles.title_}>recenty added</Text></Text>
                </View>


                <FlatList

                    keyboardShouldPersistTaps="handled"
                    vertical
                    style={{
                        margin: 10,
                    }}
                    bounces={true}
                    onEndReachedThreshold={0.8}
                    horizontal
                    nestedScrollEnabled={true}
                    data={data || []}
                    renderItem={renderItem_data}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Text>....No Data.....</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item?.id?.toString()}
                />

            </View>

        </>)
}