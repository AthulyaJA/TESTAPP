import { Platform, StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
    container: {
        margin: 25,
        flex: 1,
        backgroundColor: "#ffffff",
    },
    align_center: {
        justifyContent: "center"
    },
    title: {
        color: "black",
        fontSize: 25,
        textAlign: 'center',
        fontFamily: "inter-bold",

    },
    title_: {
        color: "black",
        fontSize: 15,
        textAlign: 'center',
        fontFamily: "inter-bold",
        color: "#ABB8C3"

    },
    tab_view_non_active: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 6,
        // width: "50%",
        //height: 50,
        backgroundColor: "#c4c5c6",
        marginLeft: 20,
        borderRadius: 10

    },
    tab_view_active: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 6,
        // width: "50%",
        //height: 50,
        backgroundColor: "black",
        marginLeft: 20,
        borderRadius: 10

    },
    top_bar_text: {
        color: "black",
        fontSize: 15,
    },

    top_bar_text_active: {
        color: "white",
        fontSize: 15,
    },
    cardbody_one: {
        borderWidth: 1,
        fontFamily: "inter-bold",
        borderColor: "rgba(151,173,182, 0.3)",
        borderRadius: 20,
        padding: 20,
        marginLeft: 20,
        width: 200,
        height: 200,
        backgroundColor: "#58b8e4"
    },
    cardbody_two: {
        borderWidth: 1,
        fontFamily: "inter-bold",
        borderColor: "rgba(151,173,182, 0.3)",
        borderRadius: 20,
        padding: 20,
        marginLeft: 20,
        width: 200,
        height: 200,
        backgroundColor: "#f9dc64"
    },
    view_distance: {
        justifyContent: "space-between",


    },
    tab_view_bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 6,
        height: 50,
        backgroundColor: "#fcb900",
        marginLeft: 20,
        borderRadius: 10,
        marginTop: 50

    },
    tab_view_bottom_3: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 6,
        height: 50,
        backgroundColor: "#0e7cae",
        marginLeft: 20,
        borderRadius: 10,
        marginTop: 50

    },

})

export default CommonStyles;