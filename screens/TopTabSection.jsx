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


export default function TopTabSection() {

    const data_tab = [{
        id: 1,
        section_name: "Year",
        checked: false
    },
    {
        id: 2,
        section_name: "6 Months",
        checked: false
    },
    {
        id: 3,
        section_name: "Last Month",
        checked: false
    },
    {
        id: 4,
        section_name: "This Week",
        checked: false
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
                style={item?.checked == true ?
                    CommonStyles.tab_view_active :
                    CommonStyles.tab_view_non_active}>
                <TouchableOpacity
                    onPress={() => { active_data(item?.id, index) }}>
                    <Text style={item?.checked == true ? CommonStyles.top_bar_text_active : CommonStyles.top_bar_text}>
                        {item?.section_name
                        }</Text></TouchableOpacity>

            </View>

        </>
    }
    return (
        <>

            <View>

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