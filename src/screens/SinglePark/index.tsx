import { ActivityIndicator, FlatList, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import Styles from "./styles";

import { Colors, Svgs } from "../../constants";
import Api from "../../services/Api";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import AttractiveItem from "../../components/AttractiveItem";

import { MainTabProps } from "../../stacks/MainTab";
import { AttractiveSinglePark, SingleParkType } from "../../types/SingleParkType";

const SinglePark = () => {

    const navigation = useNavigation<MainTabProps>();
    const route = useRoute<RouteProp<{ params: { id: number } }, "params">>();
    const { id } = route.params;

    const [ loading, setLoading ] = useState(false);
    const [ park, setPark ] = useState<SingleParkType>();

    const handleBack = () => {
        navigation.navigate("Parks");
    }

    const RenderAttractive = (item: AttractiveSinglePark) => (
        <AttractiveItem
            image={item.image}
            title={item.title}
            location={item.location}
            small={true}
            onPress={() => {
                navigation.navigate("Attractive", {
                    id: item.id,
                });
            }}
        />
    );

    useEffect(() => {

        let unmounted = false;

        const getParkInfo = async () => {
            setLoading(true);

            let json = await Api.getOnePark(id);
            // console.log(json)
            if (json.error === "") {
                setTimeout(() => {
                    if (!unmounted) {
                        setPark(json.list);
                        setLoading(false);
                    }
                }, 100);
            } else {
                alert('Erro: ' + json.error)
            }
        }

        getParkInfo();

        return () => {
            unmounted = true;
        }

    }, [ id ]);

    return(
        <SafeAreaView style={Styles.Container}>
            {loading ?
                <View style={Styles.GetLocationArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                    <Text>Carregando...</Text>
                </View>
                :
                <View>
                    <ImageBackground
                        source={{ uri: park?.image }}
                        style={Styles.Image}
                        borderBottomLeftRadius={40}
                    >
                        <LinearGradient
                            colors={["transparent", "rgba(0,0,0,0.55)"]}
                            style={Styles.Background}
                        >
                            <View style={Styles.TopArea}>
                                <TouchableOpacity style={Styles.ButtonTop} onPress={handleBack}>
                                    <Svgs.ArrowLeft width={25} height={25} fill={Colors.white} />
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.ViewBottom}>
                                <View>
                                    <Text style={Styles.TextCard}>{park?.name}</Text>
                                    <Text style={Styles.SmallText}>
                                        {park?.mainWaterfall}
                                    </Text>
                                </View>
                                {park?.price === 0 ?
                                    <Text style={Styles.TextCard}>
                                        Grátis
                                    </Text>
                                    :
                                    <View>
                                        <Text style={Styles.TextCard}>
                                            R${park?.price.toFixed(2).replace(".", ",")}
                                        </Text>
                                        <Text style={Styles.SmallText}>
                                            p/pessoa
                                        </Text>
                                    </View>
                                }
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                
                    <View style={Styles.Info}>

                        <View style={Styles.SingleInfoItem}>
                            <View style={Styles.IconSingleBox}>
                                <Svgs.Wifi width={20} height={20} fill={Colors.darkGray} />
                            </View>
                            {park?.wifi ?
                                <Svgs.Check width={20} height={20} fill={Colors.green} />
                                :
                                <Svgs.Times width={20} height={20} fill={Colors.red} />
                            }
                        </View>

                        <View style={Styles.SingleInfoItem}>
                            <View style={Styles.IconSingleBox}>
                                <Svgs.Toiled width={20} height={20} fill={Colors.darkGray} />
                            </View>
                            {park?.bath ?
                                <Svgs.Check width={20} height={20} fill={Colors.green} />
                                :
                                <Svgs.Times width={20} height={20} fill={Colors.red} />
                            }
                        </View>

                        <View style={Styles.SingleInfoItem}>
                            <View style={Styles.IconSingleBox}>
                                <Svgs.Restaurant width={20} height={20} fill={Colors.darkGray} />
                            </View>
                            {park?.restaurant ?
                                <Svgs.Check width={20} height={20} fill={Colors.green} />
                                :
                                <Svgs.Times width={20} height={20} fill={Colors.red} />
                            }
                        </View>

                        <View style={Styles.SingleInfoItem}>
                            <View style={Styles.IconSingleBox}>
                                <Svgs.Parking width={20} height={20} fill={Colors.darkGray} />
                            </View>
                            {park?.parking ?
                                <Svgs.Check width={20} height={20} fill={Colors.green} />
                                :
                                <Svgs.Times width={20} height={20} fill={Colors.red} />
                            }
                        </View>

                        <View style={Styles.SingleInfoItem}>
                            <View style={Styles.IconSingleBox}>
                                <Svgs.Bed width={20} height={20} fill={Colors.darkGray} />
                            </View>
                            {park?.hotel ?
                                <Svgs.Check width={20} height={20} fill={Colors.green} />
                                :
                                <Svgs.Times width={20} height={20} fill={Colors.red} />
                            }
                        </View>

                    </View>
                    
                    <Text style={Styles.ParkTextAttractives}>
                        Atrativos: {park?.attractives !== null ? park?.attractives.length : 0}
                    </Text>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={Styles.ScrollAreaAttractives}
                    >
                        <FlatList
                            data={park?.attractives}
                            horizontal
                            initialNumToRender={10}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => RenderAttractive(item)}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </ScrollView>

                </View>
            }
        </SafeAreaView>
    );
}

export default SinglePark;