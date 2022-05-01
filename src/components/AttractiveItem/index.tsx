import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { AttractiveType } from '../../types/AttractiveType';
import Styles from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Svgs, Colors } from '../../constants';

type Props = {
    image: ImageSourcePropType;
    name: string;
    location: string;
    onPress: () => any
}

const AttractiveItem = ({image, name, location, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={Styles.Container}
        >
            <ImageBackground
                source={image}
                style={Styles.Image} borderRadius={10}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.85)"]}
                    style={Styles.Background}
                >
                    <View style={Styles.ViewBottom}>
                        <View>
                            <Text style={Styles.TextCard}>{name}</Text>
                            <Text style={Styles.SmallText}>{location}</Text>
                        </View>
                        <Svgs.Location width={20} height={20} fill={Colors.white} />
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default AttractiveItem;