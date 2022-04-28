import { StyleSheet } from "react-native";
import { Colors, DefaultValues } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ParksArea: {
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding,
        marginTop: 30
    },
    Background: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 18
    },
    ViewBottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 18,
        paddingBottom: 10
    },
    TextCard: {
        color: Colors.white,
        fontSize: 16
    }
});

export default Styles;