import { StyleSheet } from "react-native";
import { Colors, DefaultValues } from "../../constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    GetLocationArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    CategoryArea: {
        height: "20%",
        marginTop: 30,
        paddingLeft: DefaultValues.paddingShadow
    },
    PopularPlaces: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: DefaultValues.paddingShadow,
        paddingRight: DefaultValues.paddingShadow
    },
    TextPopular: {
        color: Colors.gray
    },
    ArrowTextArea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    BoldText: {
        fontWeight: "700",
        color: Colors.gray
    },
    AttractivesArea: {
        marginTop: 25,
        paddingLeft: DefaultValues.padding
    },
    ScrollArea: {
        marginBottom: 20
    }
});

export default Styles;