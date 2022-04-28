import { ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import { useAppSelector } from "../../redux/hooks/useAppSelector";

import Parks from "../../data/Parks";
import Header from "../../components/Header";
import { Colors, Svgs } from "../../constants";
import { useEffect } from "react";

const Park = () => {

    const { cityObject, location } = useAppSelector(state => state.user);

    useEffect(() => {
        // console.log(location)
    }, []);

    return (
        <SafeAreaView style={Styles.Container}>
            {cityObject.isoCountryCode !== null &&
                <Header cityObject={cityObject} />
            }

            <ScrollView style={Styles.ParksArea}>
                {Parks.map((item,key)=>(
                    <TouchableOpacity key={key} style={{ marginBottom: 20 }}>

                        {typeof item.image !== "string" &&
                            <ImageBackground
                                source={item.image[0]}
                                style={{ width: "100%", height: 240 }}
                                borderRadius={10}
                            >
                                <LinearGradient
                                    colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.9)"]}
                                    style={Styles.Background}
                                >
                                    <View style={Styles.ViewBottom}>
                                        <View>
                                            <Text style={Styles.TextCard}>{item.name}</Text>
                                        </View>
                                        <Text style={Styles.TextCard}>R$ {item.price.toFixed(2).replace(".", ",")}</Text>
                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        }

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Svgs.Wifi width={20} height={20} fill={Colors.dark} />
                                <View style={{ marginLeft: 5 }}>
                                    {item.wifi ?
                                        <Svgs.Check width={20} height={20} fill={Colors.green}/>
                                        :
                                        <Svgs.Times width={20} height={20} fill={Colors.orange}/>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Svgs.Parking width={20} height={20} fill={Colors.dark} />
                                <View style={{ marginLeft: 5 }}>
                                    {item.parking ?
                                        <Svgs.Check width={20} height={20} fill={Colors.green}/>
                                        :
                                        <Svgs.Times width={20} height={20} fill={Colors.orange}/>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Svgs.Restaurant width={20} height={20} fill={Colors.dark} />
                                <View style={{ marginLeft: 5 }}>
                                    {item.restaurant ?
                                        <Svgs.Check width={20} height={20} fill={Colors.green}/>
                                        :
                                        <Svgs.Times width={20} height={20} fill={Colors.orange}/>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Svgs.Toiled width={20} height={20} fill={Colors.dark} />
                                <View style={{ marginLeft: 5 }}>
                                    {item.bath ?
                                        <Svgs.Check width={20} height={20} fill={Colors.green}/>
                                        :
                                        <Svgs.Times width={20} height={20} fill={Colors.orange}/>
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Svgs.Bed width={20} height={20} fill={Colors.dark} />
                                <View style={{ marginLeft: 5 }}>
                                    {item.hotel ?
                                        <Svgs.Check width={20} height={20} fill={Colors.green}/>
                                        :
                                        <Svgs.Times width={20} height={20} fill={Colors.orange}/>
                                    }
                                </View>
                            </View>
                        </View>

                        <Text>Cachoeira principal: {item.mainWaterfall}</Text>
                        <Text>Quantidade de atrativos: {item.quantityAttractives}</Text>
                        <Text style={{ marginBottom: 14 }}>Particular: {item.private ? "Sim" : "Não"}</Text>
                        <Text>Atrativos deste parque</Text>
                        {item.attractives.map(attractive => {
                            return (
                                <View key={attractive.id}>
                                    <Text>{attractive.name}</Text>
                                </View>
                            )
                        })}
                    </TouchableOpacity>
                ))}

                <View style={{ paddingBottom: 20, borderTopWidth: 1, borderTopColor: Colors.gray, paddingTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Svgs.Wifi width={20} height={20} fill={Colors.dark}/>
                        <Text style={{ marginLeft: 10 }}>Wifi</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Svgs.Parking width={20} height={20} fill={Colors.dark}/>
                        <Text style={{ marginLeft: 10 }}>Estacionamento</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Svgs.Restaurant width={20} height={20} fill={Colors.dark}/>
                        <Text style={{ marginLeft: 10 }}>Restaurante</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Svgs.Toiled width={20} height={20} fill={Colors.dark}/>
                        <Text style={{ marginLeft: 10 }}>Banheiro</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Svgs.Bed width={20} height={20} fill={Colors.dark}/>
                        <Text style={{ marginLeft: 10 }}>Hospedagem</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Park;