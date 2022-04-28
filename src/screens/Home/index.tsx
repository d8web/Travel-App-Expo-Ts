import { SafeAreaView, View, Text, ActivityIndicator, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Styles from "./styles";

import { StatusBar } from "expo-status-bar";
import * as Location from 'expo-location';
import { Colors, Svgs } from "../../constants";

import Categories from "../../data/Categories";
import Attractives from "../../data/Attractives";

import Header from "../../components/Header";
import CategoryItem from "../../components/Category";
import AttractiveItem from "../../components/AttractiveItem";
import { useNavigation } from "@react-navigation/native";
import { MainTabProps } from "../../stacks/MainTab";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { changeCityObject, changeLocation } from "../../redux/reducers/userReducer";

import { GetRegionName } from "../../helpers/LocationFunctions";

const Home = () => {
    const dispatch = useDispatch();
    const { cityObject, location } = useAppSelector(state => state.user);

    const navigation = useNavigation<MainTabProps>();

    const [ errorMsg, setErrorMsg ] = useState<null | string>(null);

    const getLocationUser = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("A permissão para acessar o local foi negada.");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        dispatch( changeLocation(location) );

        const regionName = await GetRegionName(location);
        if(regionName) {
            dispatch(changeCityObject(regionName[0]));
        }
    }

    useEffect(() => {
        getLocationUser();
    }, []);

    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar style="light" translucent={false} />
            
            {cityObject !== null && location !== null &&
                <>
                    <Header cityObject={cityObject} />

                    <View style={Styles.CategoryArea}>
                        <FlatList
                            data={Categories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item, index}) => CategoryItem(item, index, navigation)}
                            keyExtractor={(item) => item.id.toString()}
                        />
                        <TouchableOpacity style={Styles.PopularPlaces}>
                            <Text style={Styles.TextPopular}>Lugares populares</Text>
                            <View style={Styles.ArrowTextArea}>
                                <Text style={Styles.BoldText}>Ver</Text>
                                <Svgs.ArrowRight width={20} height={20} fill={Colors.gray} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={Styles.ScrollArea}>
                        <View style={Styles.AttractivesArea}>
                            <FlatList
                                data={Attractives}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item, index}) => AttractiveItem(item)}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    </ScrollView>
                </>
            }

            {!cityObject.hasOwnProperty("city") && location === null &&
                <View style={Styles.GetLocationArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                    <Text>Carregando...</Text>
                </View>
            }

            {errorMsg !== null &&
                <View style={Styles.GetLocationArea}>
                    <Text>{errorMsg}</Text>
                    <TouchableOpacity onPress={() => getLocationUser()}>
                        Pegar localização!
                    </TouchableOpacity>
                </View>
            }

        </SafeAreaView>
    );
}

export default Home;