import { useRef, useState, useEffect } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";
import { Colors, Svgs } from "../../constants";

import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { getAttractivesListFromPark, getOneAttractiveById } from "../../helpers/AttractiveFunctions";
import { AttractiveType } from "../../types/AttractiveType";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import SliderImages from "../../components/SliderImages";
import Stars from "../../components/Stars";
import { MainTabProps } from "../../stacks/MainTab";

const Attractive = () => {

    const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
    const navigation = useNavigation<MainTabProps>();

    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(true);
    const [attractive, setAttractiveItem] = useState<AttractiveType | undefined>();
    const [attractivesRelated, setAttractivesRelated] = useState<AttractiveType[] | []>();

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = ["3%", "60%"];

    const renderItem = (item: AttractiveType) => {
        return (
            <View key={item.id} style={Styles.ItemContainer}>
                <Text>{item.name}</Text>
            </View>
        );
    }

    const handleSnapPress = (index: number) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    };

    useEffect(() => {

        setAttractiveItem(undefined);

        setLoading(true);
        setAttractiveItem(getOneAttractiveById(route.params.id));
        
        if(attractive !== undefined && attractive.idPark !== null) {
            let res = getAttractivesListFromPark(attractive.idPark, attractive.id);
            setAttractivesRelated(res);
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, [route.params.id, attractive]);

    if(attractive !== undefined) {
        if(loading) {
            return (
                <View style={Styles.LoadingArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                </View>
            );
        }

        return (
            <SafeAreaView style={Styles.Container}>
                <View style={Styles.TopArea}>
                    <TouchableOpacity
                        style={Styles.ButtonTop}
                        onPress={() => navigation.goBack()}
                    >
                        <Svgs.ArrowLeft width={30} height={30} fill={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.ButtonTop}>
                        <Svgs.Favorite width={30} height={30} fill={Colors.white} />
                    </TouchableOpacity>
                </View>

                <SliderImages attractive={attractive} />

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

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Maps", {})}>
                        <Text>Traçar rota</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={Styles.AttractiveInfo}>
                    <View style={Styles.PaddingBottomView}>
                        <Text style={Styles.AttractiveName}>{attractive.title}</Text>
                        <Text style={Styles.FontDefault}>{attractive.location}</Text>

                        <View style={[Styles.RowBetween, Styles.MarginTopAndBottom]}>
                            <Text style={Styles.FontDefault}>
                                R$ {attractive.price.toFixed(2).replace(".", ",")} p/pessoa.
                            </Text>
                            <Stars stars={attractive.rate} showNumber={true} />
                        </View>

                        <Text style={Styles.Description}>{attractive.desc}</Text>

                        <Text style={Styles.FontDefault}>Recomendado um guia: {attractive.guide ? "Sim!" : "Não!"}</Text>
                        <Text style={Styles.FontDefault}>Nível de caminhada: {attractive.walkingLevel}</Text>
                        <Text style={Styles.FontDefault}>Tempo médio de caminhada: {attractive.averageWalkingTime}</Text>
                        <Text style={Styles.FontDefault}>Tem pedras escorregadias: {attractive.slipperyStones ? "Sim" : "Não"}</Text>
                        <Text style={Styles.FontDefault}>Distância de Carrancas: {attractive.distanceOfCarrancas}</Text>
                        <Text style={Styles.FontDefault}>Lugar bom para crianças: {attractive.placeForChildren ? "Sim" : "Não"}</Text>
                        <Text style={Styles.FontDefault}>Propriedade privada: {attractive.private ? "Sim" : "Não"}</Text>
                        <Text style={Styles.FontDefault}>Profundidade média: {attractive.averageDepth}</Text>
                        {attractive.averageHeightOfFall !== null &&
                            <Text style={Styles.FontDefault}>Altura média da queda d'agua: {attractive.averageHeightOfFall}</Text>
                        }
                        <Text style={Styles.FontDefault}>Impróprio para banho ou consumo: {attractive.polluted ? "Sim" : "Não"}</Text>
                        <Text style={Styles.FontDefault}>Veículo recomendado: {attractive.vehicleRecomended ? "4X4" : "Qualquer veículo"}</Text>
                        {attractive.hasOwnProperty("observations") && attractive.observations !== "" &&
                            <Text style={Styles.FontDefault}>Observações: {attractive.observations}</Text>
                        }
                    </View>
                </ScrollView>

                <BottomSheet
                    ref={sheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    onClose={() => setIsOpen(false)}
                >
                    {attractivesRelated !== undefined &&
                        <BottomSheetScrollView contentContainerStyle={Styles.ContentContainer}>
                            {attractivesRelated.map(renderItem)}
                        </BottomSheetScrollView>
                    }
                </BottomSheet>
            </SafeAreaView>
        );
    } else {
        return (
            <View style={Styles.LoadingArea}>
                <ActivityIndicator size="large" color={Colors.dark} />
            </View>
        );
    }

};

export default Attractive;