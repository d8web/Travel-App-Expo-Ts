import { StyleSheet } from "react-native";
import { Colors, DefaultValues } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ParksArea: {
        flex: 1,
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding,
        marginTop: 30,
    },
    GetLocationArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ParkItemArea: {
        height: 240,
        marginBottom: 30
    },
    Image: {
        flex: 1,
        height: "100%"
    },
    Background: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 24
    },
    ViewBottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 24,
        paddingBottom: 15
    },
    TextCard: {
        color: Colors.white,
        fontSize: 16
    },
    SmallText: {
        color: Colors.gray,
        fontSize: 12
    }
});

export default Styles;