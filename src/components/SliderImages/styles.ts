import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Image: {
        height: 380,
        resizeMode: "cover"
    },
    Carousel: {
        maxHeight: 380
    },
    DotView: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 20,
        marginTop: -50
    },
    Circle: {
        width: 10,
        height: 10,
        backgroundColor: Colors.gray,
        borderRadius: 50,
        marginHorizontal: 5
    },
    Background: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 24
    },
});

export default Styles;