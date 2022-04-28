import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    overlay: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.overlayBg
    },
    inputArea: {
        width: "100%",
        padding: 40
    },
    customButton: {
        height: 60,
        backgroundColor: Colors.green,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    customText: {
        fontSize: 18,
        color: Colors.white
    },
    messageArea: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 16,
        color: Colors.gray
    },
    buttonBoldText: {
        fontSize: 16,
        color: Colors.gray,
        fontWeight: "bold",
        marginLeft: 5
    }
});

export default Styles;