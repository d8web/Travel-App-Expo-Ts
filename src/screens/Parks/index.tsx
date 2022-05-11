import { ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";

import { useAppSelector } from "../../redux/hooks/useAppSelector";

import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { ParkType } from "../../types/ParkType";
import { Colors, Svgs } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { MainTabProps } from "../../stacks/MainTab";
import { LinearGradient } from "expo-linear-gradient";

const Park = () => {

    const { cityObject } = useAppSelector(state => state.user);
    const navigation = useNavigation<MainTabProps>();

    const [ loading, setLoading ] = useState(false);
    const [ parks, setParks ] = useState<ParkType[]>([]);

    const getAllParks = async () => {
        setLoading(true);
        setParks([]);

        let res = await Api.getParks();
        setParks(res.list);
        setLoading(false);
    }

    useEffect(() => {
        getAllParks();
    }, []);

    return (
        <SafeAreaView style={Styles.Container}>
            {cityObject.isoCountryCode !== null &&
                <Header cityObject={cityObject} />
            }

            {parks.length > 0 ?
                <ScrollView style={Styles.ParksArea}>
                    {parks.map((item,key) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => {
                                navigation.navigate("SinglePark", {
                                    id: item.id
                                });
                            }}
                            style={Styles.ParkItemArea}
                        >
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={Styles.Image} borderRadius={10}
                            >
                                <LinearGradient
                                    colors={["transparent", "rgba(0,0,0,0.65)"]}
                                    style={Styles.Background}
                                >
                                    <View style={Styles.ViewBottom}>
                                        <View>
                                            <Text style={Styles.TextCard}>{item.name}</Text>
                                            {item.price === 0 ?
                                                <Text style={Styles.SmallText}>Grátis</Text>
                                                :
                                                <Text style={Styles.SmallText}>
                                                    R$ {item.price.toFixed(2).replace(".", ",")}
                                                </Text>
                                            }
                                        </View>
                                        <Svgs.Location width={20} height={20} fill={Colors.white} />
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                :
                <View style={Styles.GetLocationArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                    <Text>Carregando...</Text>
                </View>
            }
        </SafeAreaView>
    );
}

export default Park;