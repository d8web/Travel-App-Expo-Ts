import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: Colors.overlayWhite,
        flexDirection: "row",
        borderRadius: 30,
        paddingLeft: 15,
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.white,
        marginLeft: 10
    }
});

export default Styles;