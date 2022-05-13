import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    LoadingArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Avatar: {
        marginTop: 30,
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 30
    },
    InputArea: {
        flex: 1,
        width: "100%",
        padding: 20
    },
    InputItem: {
        width: "100%",
        height: 50,
        borderWidth: 0.5,
        borderColor: Colors.dark,
        fontSize: 16,
        borderRadius: 15,
        paddingHorizontal: 16,
        marginBottom: 16,
        color: Colors.darkGray
    }
});

export default Styles;