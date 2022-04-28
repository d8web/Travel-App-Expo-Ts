import { StyleSheet } from "react-native";
import { DefaultValues } from "../../constants";

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    ParksArea: {
        paddingLeft: DefaultValues.padding,
        paddingRight: DefaultValues.padding,
        marginTop: 30
    }
});

export default Styles;