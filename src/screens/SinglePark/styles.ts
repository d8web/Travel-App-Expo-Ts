import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    GetLocationArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Image: {
        width: "100%",
        height: 400
    },
    TopArea: {
        position: "absolute",
        top: 0,
        height: 60,
        width: "100%",
        backgroundColor: "transparent",
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    ButtonTop: {
        width: 60,
        height: 60,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    Background: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 30,
        paddingRight: 30,
        borderBottomLeftRadius: 40
    },
    ViewBottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 25
    },
    TextCard: {
        color: Colors.white,
        fontSize: 16
    },
    SmallText: {
        color: Colors.gray,
        fontSize: 12
    },
    Info: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    IconSingleBox: {
        marginRight: 8
    },
    SingleInfoItem: {
        flexDirection: "row",
    },
    AttractiveImagePark: {
        width: "100%",
        height: 200
    },
    ScrollAreaAttractives: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20
    },
    ParkTextAttractives: {
        paddingHorizontal: 20,
        fontSize: 13,
        color: Colors.darkGray,
    },
    ParkTextSmall: {
        paddingHorizontal: 20,
        fontSize: 15,
        color: Colors.dark,
        marginBottom: 5
    }
});

export default Styles;