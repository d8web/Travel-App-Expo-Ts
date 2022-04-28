import { useEffect } from "react";
import { ImageBackground, SafeAreaView, ActivityIndicator } from "react-native";
import Styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stacks/MainStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { Images } from "../../constants";
import Api from "../../services/Api";

import { useDispatch } from "react-redux";
import { setName, setAvatar } from "../../redux/reducers/userReducer";

const Preload = () => {

    const dispatch = useDispatch() // Mudar coisas do redux

    const changeName = (newName: string) => dispatch( setName(newName) );
    const changeAvatar = (newAvatar: string) => dispatch( setAvatar(newAvatar) );

    type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList, "Preload">;
    const { navigate, reset } = useNavigation<PreloadScreenProp>();

    useEffect(() => {

        const checkToken = async () => {
            // Pegando o token armazenado no asyncstorage
            const token = await AsyncStorageLib.getItem("token");
            if(token) {
                // Validar o token
                let json = await Api.checkToken(token);
                if(json.token) {

                    await AsyncStorageLib.setItem("token", json.token);

                    changeName(json.data.name);
                    changeAvatar(json.data.avatar);

                    // Redirecionar
                    reset({
                        routes: [{ name: "MainTab" }]
                    });

                    return;
                    
                } else {
                    navigate("SignIn");
                }
            }
            // Se não tem token, mandamos o usuário para o login
            navigate("SignIn");
        }

        checkToken();

    }, []);

    return (
        <ImageBackground source={Images.PreloadImage} style={Styles.container}>
            <SafeAreaView style={Styles.overlay}>
                <ActivityIndicator size="large" color="#fff" />
            </SafeAreaView>
        </ImageBackground>
    );
}

export default Preload;