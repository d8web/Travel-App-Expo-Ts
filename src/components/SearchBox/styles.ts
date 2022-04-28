import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    Container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    Box: {
        width: "90%",
        height: 60,
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        elevation: 4,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: "#111",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    Input: {
        width: "100%",
        height: "100%",
        paddingLeft: 14,
        fontSize: 18
    },
    Results: {
        width: "90%",
        marginBottom: 40,
        backgroundColor: "transparent",
        borderColor: "#ccc",
    }
});

export default Styles;