import { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import Styles from "./styles";

const Profile = () => {

    useEffect(() => {
        console.log("ok")
    }, [])

    return (
        <SafeAreaView style={Styles.container}>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;