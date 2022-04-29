import { Dimensions, FlatList, Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";

import { useRoute, RouteProp } from "@react-navigation/native";
import { getOneAttractiveById } from "../../helpers/AttractiveFunctions";
import { useRef, useState } from "react";
import { Colors } from "../../constants";

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

const { width } = Dimensions.get("window");

const Attractive = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
    const attractive = getOneAttractiveById(route?.params?.id);

    type Props = {
        id: number;
        image: ImageSourcePropType
    }

    let flatListRef = useRef<FlatList<Props> | null>();

    const onViewRef = useRef(({ changed } : { changed: any }) => {
        if(changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ animated: true, index: index });
    }

    const renderImages: React.FC<{ item: Props }> = ({ item }) => {
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

    return (
        <View style={Styles.Container}>
            <FlatList
                data={attractive.images}
                renderItem={renderImages}
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
                {attractive.images.map(({}, index: number) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={[Styles.Circle, {
                            backgroundColor: index == currentIndex ? Colors.dark : Colors.gray
                        }]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </View>
    );
};

export default Attractive;