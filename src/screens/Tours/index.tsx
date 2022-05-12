import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { ActivityIndicator, Linking, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { Colors, Svgs } from "../../constants";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import Api from "../../services/Api";
import { TourType } from "../../types/TourType";
import Styles from "./styles";

const Tours = () => {

    const { cityObject } = useAppSelector(state => state.user);

    const [ loading, setLoading ] = useState(false);
    const [ tours, setTours ] = useState<TourType[]>([]);

    const handleWhats = (number: string, agencyName: string, tourName: string) => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=55${number}&text=Olá,${agencyName}, tudo bem? Gostaria de consultar a disponibilidade do passeio: ${tourName}`);
    }

    useEffect(() => {

        const getAllTours = async () => {
            setLoading(true);
            setTours([]);
    
            let res = await Api.getTours();
            // console.log(res)
            setTours(res.list);
            setLoading(false);
        }

        getAllTours();

    }, []);

    return (
        <SafeAreaView style={Styles.Container}>
            {loading ?
                <View style={Styles.LocationArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                    <Text>Carregando...</Text>
                </View>
                :
                <>
                    <Header cityObject={cityObject} />
                    <ScrollView showsVerticalScrollIndicator={false} style={Styles.ScrollArea}>
                        {tours.map((item, key) => (
                            <TouchableOpacity key={key} style={Styles.TourArea}>
                                <ImageBackground
                                    style={Styles.BackgroundImage}
                                    source={{ uri: item.background }}
                                    borderRadius={20}
                                >    
                                    <LinearGradient
                                        colors={["rgba(0,0,0,0.45)", "rgba(0,0,0,0.85)"]}
                                        style={Styles.LinearGradient}
                                    >
                                        <View style={[Styles.FlexRow, Styles.JustifyBetween, Styles.CenterRow]}>
                                            <View>
                                                <Text style={[Styles.TextWhite]}>{item?.name}</Text>
                                                <Text style={[Styles.TextWhite]}>{item?.agencyInfo?.name}</Text>
                                            </View>
                                            <TouchableOpacity style={Styles.WhatzappBtn} onPress={() => handleWhats(item?.agencyInfo?.phone, item?.agencyInfo.name, item?.name)}>
                                                <Svgs.Whatsapp width={20} height={20} fill={Colors.white} />
                                            </TouchableOpacity>
                                        </View>

                                        <View>
                                            <View style={[Styles.FlexRow, Styles.JustifyBetween]}>
                                                <View>
                                                    <Text style={[Styles.TextWhite]}>{item?.meansOfLocomotion}</Text>
                                                    <Text style={[Styles.TextWhite]}>
                                                        Atrativos: {item?.attractivesIncluded.split(",").length}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text style={[Styles.TextWhite]}>
                                                        R$ {item?.pricePerPeople.toFixed(2).replace(".", ",")}
                                                    </Text>
                                                    <Text style={[Styles.TextWhite]}>p/pessoa</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </>
            }
        </SafeAreaView>
    );
}

export default Tours;