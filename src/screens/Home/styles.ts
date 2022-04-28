import { StyleSheet } from "react-native";
import { Colors, DefaultValues } from "../../constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Hero: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: DefaultValues.padding,
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding
    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    LocationAreaInfo: {
        flexDirection: "row",
        marginTop: 30,
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding
    },
    LocationText: {
        marginLeft: 6,
        fontWeight: "600",
        fontSize: 14,
    },
    HelloArea: {
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding
    },
    Hello: {
        fontSize: 28,
        fontWeight: "700",
        marginTop: 25,
        textTransform: "capitalize"
    },
    DescriptionHome: {
        fontSize: 14,
        color: Colors.gray
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