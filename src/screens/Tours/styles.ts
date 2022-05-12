import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    LocationArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ScrollArea: {
        paddingHorizontal: 30,
        marginTop: 30
    },
    TourArea: {
        marginBottom: 20
    },
    BackgroundImage: {
        width: "100%",
        height: 320,
    },
    FlexRow: {
        flexDirection: "row"
    },
    JustifyBetween: {
        justifyContent: "space-between"
    },
    CenterRow: {
        alignItems: "center"
    },
    LinearGradient: {
        height: "100%",
        justifyContent: "space-between",
        padding: 30,
        borderRadius: 20
    },
    TextWhite: {
        color: Colors.white
    },
    WhatzappBtn: {
        width: 50,
        height: 50,
        backgroundColor: Colors.green,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Styles;