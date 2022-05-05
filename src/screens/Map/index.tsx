import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import Styles from "./styles";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useNavigation } from "@react-navigation/native";
import { Colors, Svgs } from "../../constants";

import SearchBox from "../../components/SearchBox";
import { MainTabProps } from "../../stacks/MainTab";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { changeCityObject, changeLocation } from "../../redux/reducers/userReducer";
import { GetRegionName } from "../../helpers/LocationFunctions";

const Data = [
    { id: 1, type: "Carro Padrão", price: 15, min: 4, max: 4, ocupations: [ 4, 8 ] },
    { id: 2, type: "Of Road", price: 30, min: 4, max: 8, ocupations: [ 4, 8 ]  },
    { id: 3, type: "Quadriciclo", price: 30, min: 1, max: 2 },
    { id: 4, type: "Van", price: 15, min: 5, max: 18, ocupations: [ 5, 18 ] }
];

const Map = () => {

    const dispatch = useDispatch();
    const { location, cityObject } = useAppSelector(state => state.user);

    const addressCompleted = `${cityObject.street}, ${cityObject.streetNumber} - ${cityObject.district} - ${cityObject.region}, ${cityObject.postalCode}, ${cityObject.country}`

    const navigation = useNavigation<MainTabProps>();

    const [map, setMap] = useState<null | MapView>(null);
    const [currentLocation, setCurrentLoc] = useState<Location.LocationObject | null>(null);
    const [destLocation, setDestLocation] = useState<Props | null>(null);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [time, setTime] = useState<number | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [options, setOptions] = useState(Data);
    const [guia, setGuia] = useState<boolean | undefined>(false);
    const [loading, setLoading] = useState(false);

    type Props = {
        latitude: number;
        longitude: number;
        guia?: boolean;
    }

    const searchBoxClick = (item: Props) => {
        if(item.latitude == 0) {
            alert("Nenhuma localização definida!");
            return;
        }

        setDestLocation({
            latitude: item.latitude, // Api return string, convert using parseFloat
            longitude: item.longitude,
        });

        setGuia(item.guia);

        setTimeout(() => {
            realignMap();
        }, 1000);
    }

    const realignMap = () => {
        map?.fitToSuppliedMarkers(["OriginMarker", "DestinationMarker"], {
            edgePadding: {
                left: 100,
                top: 500,
                right: 100,
                bottom: 200
            },
            animated: true
        });
    }

    const KEY = "AIzaSyAg0MjGMmpj4HxUllQBt5bp7aXzHOr_ld8";

    const getCurrentLocation = async () => {

        setLoading(true);
        // Se o location está definido no state, não precisamos pegar a posição atual
        if(location?.coords.latitude && location.coords.longitude) {
            setCurrentLoc(location);
            setLoading(false);
            return;
        }

        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if(status === "denied") {
                navigation.reset({
                    routes: [{ name: "Home" }]
                });
                return;
            }

            if(status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High }, (currentPosition) => {
                    setCurrentLoc(currentPosition);
                    // Mudando no state da localização
                    changeLocation(currentPosition);

                    // Mudando o state da cidade
                    const regionName = GetRegionName(currentLocation as Location.LocationObject);
                    changeCityObject(regionName);
                }
            );
        }catch(error) {
            console.log(error);
            setErrorMsg("Permissão negada!");
        }

        setLoading(false);
    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    if(currentLocation !== null) {
        return (
            <View style={Styles.Container}>
                <StatusBar style="light" translucent={false} />

                <MapView
                    ref={obj => setMap(obj)}
                    style={Styles.Map}
                    initialRegion={{
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004
                    }}
                    camera={{
                        center: {
                            latitude: currentLocation.coords.latitude,
                            longitude: currentLocation.coords.longitude
                        },
                        zoom: 16,
                        pitch: 0,
                        altitude: 0,
                        heading: 0
                    }}
                    mapType="standard"
                    // onRegionChangeComplete={() => {}}
                >
                    <Marker
                        title="Minha Localização"
                        identifier="OriginMarker"
                        pinColor={Colors.orange}
                        coordinate={{
                            latitude: currentLocation.coords.latitude,
                            longitude: currentLocation.coords.longitude,
                        }}
                    />

                    {destLocation !== null &&
                        <Marker
                            title="Destino"
                            description={guia ? "Recomendado um Guia" : "Você consegue ir sozinho!"}
                            identifier="DestinationMarker"
                            coordinate={destLocation}
                        />
                    }

                    {destLocation !== null &&
                        <MapViewDirections
                            origin={{
                                latitude: currentLocation.coords.latitude,
                                longitude: currentLocation.coords.longitude,
                            }}
                            destination={destLocation}
                            apikey={KEY}
                            strokeWidth={6}
                            strokeColor={Colors.red}
                            optimizeWaypoints={true}
                            onStart={(params) => {
                                // console.log(`Iniciando roteiro entre "${params.origin}" e "${params.destination}"`);
                            }}
                            onReady={result => {
                                setDistance(result.distance)
                                setPrice(result.distance * 10);
                                setTime(result.duration);
                                setShowModalInfo(true);
                            }}
                        />
                    }
                </MapView>

                <SearchBox dataClick={searchBoxClick} />

                {addressCompleted &&
                    <View style={{ position: "absolute", top: 120, width: "100%", justifyContent: "center", alignItems: "center", left: 0, backgroundColor: "#fff", paddingHorizontal: 10, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "red" }}>
                        <Text style={{ fontSize: 15 }}>{addressCompleted}</Text>
                    </View>
                }

                {distance !== null && time !== null && price !== null && showModalInfo &&
                    <View style={{
                        backgroundColor: "#fff",
                        width: "100%",
                        height: 150,
                        position: "absolute",
                        justifyContent: "center",
                        top: 184,
                        padding: 20
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            marginBottom: 20
                        }}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text>Distância</Text>
                                <Text>{distance.toFixed(1)}Km</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text>Tempo</Text>
                                <Text>{time.toFixed(0)}mins</Text>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text>Preço</Text>
                                <Text>R$ {price.toFixed(2).replace(".", ",")}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", paddingHorizontal: 5, justifyContent: "space-around" }}>
                            <TouchableOpacity style={{
                                width: "48%",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: Colors.dark,
                                padding: 10
                            }}>
                                <Text style={{ color: Colors.white, fontSize: 16 }}>Solicitar motorista</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowModalInfo(false);
                                    setDestLocation(null);
                                    setDistance(null);
                                    setTime(null);
                                    setPrice(null);

                                    setCurrentLoc(location);
                                }}
                                style={{
                                    width: "48%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor:
                                    Colors.red,
                                    padding: 10
                                }}>
                                <Text style={{ color: Colors.white, fontSize: 16 }}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                <TouchableOpacity
                    style={Styles.ButtonRealign}
                    onPress={() => {
                        getCurrentLocation();
                        realignMap();
                        if(price !== null && time !== null && distance !== null) {
                            setShowModalInfo(true);
                        }
                    }}
                >
                    <Svgs.Focus width={38} height={38} fill={Colors.white} />
                </TouchableOpacity>

            </View>
        );
    } else {
        return (
            <View style={Styles.AreaGetLocation}>

                {loading &&
                    <View>
                        <ActivityIndicator
                            size="large"
                            color={Colors.dark}
                            style={Styles.MarginActivity}
                        />
                        <Text>Aguarde...</Text>
                    </View>
                }

                {!loading &&
                    <TouchableOpacity
                        style={Styles.ButtonGetLocation}
                        onPress={getCurrentLocation}
                    >
                        <Text style={Styles.TextButtonGetLoc}>
                            Pegar localização
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

export default Map;