import { View, StyleSheet, Text } from "react-native";
import { Svgs, Colors } from "../../constants";

type Props = {
    stars: number;
    showNumber: boolean
}

const Stars = ({ stars, showNumber }: Props) => {

    let s = [ 0, 0, 0, 0, 0 ];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for(var i = 0; i < floor; i++) {
        s[i] = 2;
    }

    if(left > 0) {
        s[i] = 1;
    }

    return (
        <View style={Styles.StarArea}>
            {s.map((i,k) => (
                <View key={k} style={Styles.StarView}>
                    {i === 0 && <Svgs.StarEmpty width={18} height={18} fill={Colors.yellow} />}
                    {i === 1 && <Svgs.StarHalf width={18} height={18} fill={Colors.yellow} />}
                    {i === 2 && <Svgs.StarFull width={18} height={18} fill={Colors.yellow} />}
                </View>
            ))}
            {showNumber && <Text style={Styles.StarText}>{stars}</Text>}
        </View>
    );
}

export default Stars;

const Styles = StyleSheet.create({
    StarArea: {
        flexDirection: "row"
    },
    StarView: {},
    StarText: {
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5,
        color: Colors.gray
    }
});