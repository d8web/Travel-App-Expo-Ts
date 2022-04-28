import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    FlatArea: {
        width: 80,
        height: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.39,
        shadowRadius: 5,
        elevation: 13,
    },
    CatName: {
        textAlign: "center",
        color: Colors.gray,
        marginTop: 10,
        fontSize: 12
    }
});

export default Styles;