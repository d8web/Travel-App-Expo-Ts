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
    { id: 1, type: "Carro Padrão", price: 15 },
    { id: 1, type: "Carro 4X4", price: 30 }
];

const Map = () => {

    const dispatch = useDispatch();
    const { location } = useAppSelector(state => state.user);

    const navigation = useNavigation<MainTabProps>();

    const [map, setMap] = useState<null | MapView>(null);
    const [currentLocation, setCurrentLoc] = useState<Location.LocationObject | null>(null);
    const [destLocation, setDestLocation] = useState<Props | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [distance, setDistance] = useState(null);
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
                top: 280,
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
                    mapType="standard"
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
                            strokeWidth={10}
                            strokeColor={Colors.blue}
                            mode="DRIVING"
                            lineDashPattern={[0]}
                            onReady={result => {
                                setDistance(result.distance)
                                setPrice(result.distance * 10);
                            }}
                        />
                    }
                </MapView>

                <SearchBox dataClick={searchBoxClick} />

                <TouchableOpacity
                    style={Styles.ButtonRealign}
                    onPress={() => {
                        getCurrentLocation();
                        realignMap();
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