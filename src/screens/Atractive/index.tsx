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
import Api from "../../services/Api";

const Attractive = () => {

    const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
    const navigation = useNavigation<MainTabProps>();

    const { id } = route.params;

    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(true);
    const [attractive, setAttractive] = useState<AttractiveType | undefined>();
    const [favorited, setFavorited] = useState(false);
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

    const handleFavorited = async () => {
        if(attractive !== undefined) {
            setFavorited(!favorited)
    
            let res = await Api.toogleFavorite(attractive.id);
            if(res.error !== "") {
                alert(res.error);
            }
        }
    }

    const handleSnapPress = (index: number) => {
        sheetRef.current?.snapToIndex(index);
        setIsOpen(true);
    };

    useEffect(() => {

        let unmounted = false;

        const getAttractiveInfo = async () => {
            setLoading(true);

            let json = await Api.getOneAttractive(id);
            if (json.error === "") {
                setTimeout(() => {
                    if (!unmounted) {
                        setAttractive(json.data);
                        setFavorited(json.data.favorited);
                        setLoading(false);
                    }
                }, 100);
            } else {
                alert('Erro: ' + json.error)
            }
        }

        getAttractiveInfo();

        return () => {
            unmounted = true;
        }

    }, [ id ]);

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
                    <TouchableOpacity style={Styles.ButtonTop} onPress={handleFavorited}>
                        {favorited ?
                            <Svgs.FavoriteFull width={30} height={30} fill={Colors.red} />
                            :
                            <Svgs.Favorite width={30} height={30} fill={Colors.red} />
                        }
                    </TouchableOpacity>
                </View>

                {attractive !== undefined &&
                    <SliderImages attractive={attractive} />
                }

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
                        <Text>Tra??ar rota</Text>
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

                        <Text style={Styles.Description}>{attractive.description}</Text>

                        <Text style={Styles.FontDefault}>Recomendado um guia: {attractive.guide ? "Sim!" : "N??o!"}</Text>
                        <Text style={Styles.FontDefault}>N??vel de caminhada: {attractive.walkingLevel}</Text>
                        <Text style={Styles.FontDefault}>Tempo m??dio de caminhada: {attractive.averageWalkingTime}</Text>
                        <Text style={Styles.FontDefault}>Tem pedras escorregadias: {attractive.slipperyStones ? "Sim" : "N??o"}</Text>
                        <Text style={Styles.FontDefault}>Dist??ncia de Carrancas: {attractive.distanceOfCarrancas}</Text>
                        <Text style={Styles.FontDefault}>Lugar bom para crian??as: {attractive.placeForChildren ? "Sim" : "N??o"}</Text>
                        <Text style={Styles.FontDefault}>Propriedade privada: {attractive.private ? "Sim" : "N??o"}</Text>
                        <Text style={Styles.FontDefault}>Profundidade m??dia: {attractive.averageDepth}</Text>
                        {attractive.averageHeightOfFall !== null &&
                            <Text style={Styles.FontDefault}>Altura m??dia da queda d'agua: {attractive.averageHeightOfFall}</Text>
                        }
                        <Text style={Styles.FontDefault}>Impr??prio para banho ou consumo: {attractive.polluted ? "Sim" : "N??o"}</Text>
                        <Text style={Styles.FontDefault}>Ve??culo recomendado: {attractive.vehicleRecomended ? "4X4" : "Qualquer ve??culo"}</Text>
                        {attractive.hasOwnProperty("observations") && attractive.observations !== "" &&
                            <Text style={Styles.FontDefault}>Observa????es: {attractive.observations}</Text>
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