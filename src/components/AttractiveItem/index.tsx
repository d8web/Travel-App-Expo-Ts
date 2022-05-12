import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Svgs, Colors } from '../../constants';

type Props = {
    image: string;
    title: string;
    location: string;
    onPress: () => any,
    small?: boolean;
}

const AttractiveItem = ({image, title, location, onPress, small}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[Styles.Container, { height: small ? 250 : 320 }]}
        >
            <ImageBackground
                source={{ uri: image }}
                style={Styles.Image} borderRadius={10}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.85)"]}
                    style={Styles.Background}
                >
                    <View style={Styles.ViewBottom}>
                        <View>
                            <Text style={Styles.TextCard}>{title}</Text>
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