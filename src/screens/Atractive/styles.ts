import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Image: {
        height: 280,
        resizeMode: "cover"
    },
    Carousel: {
        maxHeight: 280
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
    }
});

export default Styles;