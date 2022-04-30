import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
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
    ContentContainer: {
        padding: 10,
        backgroundColor: Colors.white
    },
    ItemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: Colors.gray,
    },
    ButtonArea: {
        justifyContent: "center",
        alignItems: "center"
    },
    Button: {
        width: 80,
        height: 40,
        backgroundColor: Colors.dark,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonText: {
        color: Colors.white,
        fontSize: 16
    },
    AttractiveInfo: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    PaddingBottomView: {
        paddingBottom: 50
    },
    RowBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    AttractiveName: {
        fontSize: 22,
        fontWeight: "bold"
    },
    Description: {
        fontSize: 16,
        marginBottom: 10
    },
    FontDefault: {
        fontSize: 16,
        marginBottom: 8
    },
    MarginTopAndBottom: {
        marginTop: 20,
        marginBottom: 15
    }
});

export default Styles;