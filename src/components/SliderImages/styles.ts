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
        paddingVertical: 20
    },
    Circle: {
        width: 10,
        height: 10,
        backgroundColor: Colors.gray,
        borderRadius: 50,
        marginHorizontal: 5
    },
});

export default Styles;