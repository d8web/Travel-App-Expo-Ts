import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    TabArea: {
        height: 60,
        backgroundColor: Colors.blue,
        flexDirection: "row"
    },
    TabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Styles;