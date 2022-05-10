import { SafeAreaView, ScrollView, Text } from "react-native";
import Styles from "./styles";

import { useAppSelector } from "../../redux/hooks/useAppSelector";

import Header from "../../components/Header";
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
                <Text>Parks</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Park;