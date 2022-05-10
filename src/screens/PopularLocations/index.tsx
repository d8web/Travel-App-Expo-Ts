import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import Styles from "./styles";
import { Colors } from "../../constants";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { AttractiveType } from "../../types/AttractiveType";

import Api from "../../services/Api";
import Header from "../../components/Header";

const PopularLocations = () => {

    const { cityObject } = useAppSelector(state => state.user);

    const [ loading, setLoading ] = useState<boolean>(false);
    const [ popularList, setPopularList ] = useState<AttractiveType[]>([]);

    useEffect(() => {

        let unmounted = false;

        const getPopular = async () => {
            setLoading(true);

            let json = await Api.getPopularAttractives();
            if (json.error === "") {
                setTimeout(() => {
                    if (!unmounted) {
                        setPopularList(json.list);
                        setLoading(false);
                    }
                }, 100);
            } else {
                alert('Erro: ' + json.error)
            }
        }

        getPopular();

        return () => {
            unmounted = true;
        }

    }, []);

    if(loading) {
        return (
            <View style={Styles.LoadingArea}>
                <ActivityIndicator size="large" color={Colors.dark} />
            </View>
        );
    }

    return (
        <SafeAreaView style={Styles.Container}>
            <Header cityObject={cityObject} />
            {popularList.map((item, key) => (
                <Text key={key}>{item.title}</Text>
            ))}
        </SafeAreaView>
    );
}

export default PopularLocations;