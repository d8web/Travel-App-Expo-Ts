import { useRef, useState, useMemo, useCallback } from "react";
import { FlatList, ImageSourcePropType, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";
import { Colors } from "../../constants";

import { useRoute, RouteProp } from "@react-navigation/native";
import { getOneAttractiveById } from "../../helpers/AttractiveFunctions";
import { AttractiveType } from "../../types/AttractiveType";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import RenderImages from "../../components/SliderImages";
import Stars from "../../components/Stars";

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

const Attractive = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
    const attractive = getOneAttractiveById(route?.params?.id);

    type Props = { id: number; image: ImageSourcePropType }

    let flatListRef = useRef<FlatList<Props> | null>();

    const onViewRef = useRef(({ changed }: { changed: any }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({ animated: true, index: index });
    }

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["3%", "60%"], []);

    const data = useMemo(
        () =>
            [attractive],
        []
    );

    const renderItem = useCallback(
        (item: AttractiveType) => (
            <View key={item.id} style={Styles.ItemContainer}>
                <Text>{item.name}</Text>
            </View>
        ),
        []
    );

    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    }, []);

    return (
        <SafeAreaView style={Styles.Container}>
            <FlatList
                data={attractive.images}
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
                {attractive.images.map(({ }, index: number) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={[Styles.Circle, {
                            backgroundColor: index == currentIndex ? Colors.dark : Colors.gray
                        }]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
            
            {!isOpen &&
                <View style={Styles.ButtonArea}>
                    <TouchableOpacity
                        onPress={() => handleSnapPress(1)}
                        style={Styles.Button}
                    >
                        <Text style={Styles.ButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
            }

            <ScrollView style={Styles.AttractiveInfo}>
                <View style={Styles.PaddingBottomView}>
                    <Text style={Styles.AttractiveName}>{attractive.title}</Text>

                    <View style={[Styles.RowBetween, Styles.MarginTopAndBottom]}>
                        <Text>R$ {attractive.price.toFixed(2).replace(".", ",")} p/pessoa.</Text>
                        <Stars stars={attractive.rate} showNumber={true} />
                    </View>

                    <Text style={Styles.Description}>{attractive.desc}</Text>

                    <Text>{attractive.location}</Text>
                    <Text>{attractive.guide ? "Recomendado um guia!" : "Você consegue chegar sem guia"}</Text>
                    <Text>Nível de caminhada: {attractive.walkingLevel}</Text>
                    <Text>Tempo médio de caminhada: {attractive.averageWalkingTime}</Text>
                    <Text>Tem pedras escorregadias: {attractive.slipperyStones ? "Sim" : "Não"}</Text>
                    <Text>Distância de Carrancas: {attractive.distanceOfCarrancas}</Text>
                    <Text>Lugar bom para crianças: {attractive.placeForChildren ? "Sim" : "Não"}</Text>
                    <Text>Propriedade privada: {attractive.private ? "Sim" : "Não"}</Text>
                    <Text>Profundidade média: {attractive.averageDepth}</Text>
                    <Text>Altura média da queda d'agua: {attractive.averageHeightOfFall}</Text>
                    <Text>Impróprio para banho ou consumo: {attractive.polluted ? "Sim" : "Não"}</Text>
                    <Text>Veículo recomendado: {attractive.vehicleRecomended ? "4X4" : "Qualquer veículo"}</Text>
                </View>
            </ScrollView>
            
            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                onClose={() => setIsOpen(false)}
            >
                <BottomSheetScrollView contentContainerStyle={Styles.ContentContainer}>
                    {data.map(renderItem)}
                </BottomSheetScrollView>
            </BottomSheet>

        </SafeAreaView>
    );
};

export default Attractive;