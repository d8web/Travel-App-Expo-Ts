import { TouchableOpacity, ImageBackground, Text, ImageSourcePropType, Dimensions } from "react-native";
import Styles from "./styles";

const { width } = Dimensions.get("window");

type Props = {
    id: number;
    image: ImageSourcePropType
}

const RenderImages: React.FC<{ item: Props }> = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => alert("clicked")}
            activeOpacity={1}
        >
            <ImageBackground
                source={item.image}
                style={[Styles.Image, { width }]}
            >
                <Text>Text</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default RenderImages;