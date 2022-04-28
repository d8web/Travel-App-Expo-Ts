import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Map: {
        width: "100%",
        height: "100%"
    },
    ButtonRealign: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.blue,
        position: "absolute",
        zIndex: 99,
        bottom: 20,
        borderRadius: 40,
        right: 20
    },
    AreaGetLocation: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonGetLocation: {
        width: 180,
        height: 50,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    TextButtonGetLoc: {
        color: Colors.white,
        fontSize: 18
    },
    MarginActivity: {
        marginTop: 50
    }
});

export default Styles;