import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        width: 240,
        height: 320,
        borderRadius: 10,
        marginRight: 20
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