import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import { TouchableOpacity, ImageBackground, Dimensions, FlatList, View } from "react-native";
import { Colors } from "../../constants";
import { AttractiveType } from "../../types/AttractiveType";
import Styles from "./styles";
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

const { width } = Dimensions.get("window");

type Props = {
    id: number;
    url: string;
}

const RenderImages: React.FC<{ item: Props }> = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => {}}
            activeOpacity={1}
        >
            <ImageBackground
                source={{ uri: item.url }}
                style={[Styles.Image, { width }]}
            >
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.5)"]}
                    style={Styles.Background}
                ></LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

type PropsAttractive = {
    attractive: AttractiveType
}

const SliderImages = ({ attractive }: PropsAttractive) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    let flatListRef = useRef<FlatList<Props> | null>();

    const onViewRef = useRef(({ changed }: { changed: any }) => {
        if(changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ animated: true, index: index });
    }

    return (
        <>
            <FlatList
                data={attractive.photos}
                renderItem={RenderImages}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => {
                    flatListRef.current = ref
                }}
                style={Styles.Carousel}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />

            <View style={Styles.DotView}>
                {attractive.photos?.map(({ }, index: number) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={[Styles.Circle, {
                            backgroundColor: index == currentIndex ? Colors.blue : Colors.gray
                        }]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </>
    )
}

export default SliderImages;