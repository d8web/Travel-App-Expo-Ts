import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { AttractiveType } from '../../types/AttractiveType';
import Styles from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Svgs, Colors } from '../../constants';

const AttractiveItem = (item: AttractiveType) => {
    return (
        <TouchableOpacity
            onPress={() => alert(item.id)}
            style={Styles.Container}
        >
            <ImageBackground
                source={item.image}
                style={Styles.Image} borderRadius={10}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.85)"]}
                    style={Styles.Background}
                >
                    <View style={Styles.ViewBottom}>
                        <View>
                            <Text style={Styles.TextCard}>{item.name}</Text>
                            <Text style={Styles.SmallText}>{item.location}</Text>
                        </View>
                        <Svgs.Location width={20} height={20} fill={Colors.white} />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default AttractiveItem;