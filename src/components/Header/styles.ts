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
        paddingRight: DefaultValues.padding,
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
    }
});

export default Styles;