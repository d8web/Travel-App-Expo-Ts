import { useState } from "react";
import * as RN from "react-native";
import Styles from "./styles";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../stacks/MainStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

import { Images, Svgs } from "../../constants";
import SignInput from "../../components/SignInput";

import Api from "../../services/Api";

import { useDispatch } from "react-redux";
import { setName, setAvatar } from "../../redux/reducers/userReducer";

const SignUp = () => {

    const dispatch = useDispatch() // Mudar coisas do redux

    const [ nameField, setNameField ] = useState("");
    const [ emailField, setEmailField ] = useState("");
    const [ passwordField, setPasswordField ] = useState("");

    const changeName = (newName: string) => dispatch( setName(newName) );
    const changeAvatar = (newAvatar: string) => dispatch( setAvatar(newAvatar) );

    type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;
    const { reset } = useNavigation<PreloadScreenProp>();

    const signUpClick = async () => {
        if(nameField !== "" && emailField !== "" && passwordField !== "") {
            let json = await Api.signUp(nameField, emailField, passwordField);
            if(json.token) {
                // [Cadastro válido]: Salvar o token no Asynstorage
                await AsyncStorageLib.setItem("token", json.token);

                changeName(json.data.name);
                changeAvatar(json.data.avatar);

                // Redirecionar
                reset({
                    routes: [{ name: "MainTab" }]
                });
            } else {
                alert("Erro: " + json.error);
            }

        } else {
            alert("Preencha os campos!");
        }
    }

    const handleGoScreen = () => {
        reset({
            routes: [{ name: "SignIn" }]
        });
    }

    return (
        <RN.ImageBackground
            source={Images.PreloadImage}
            style={Styles.container}
        >
            <StatusBar style="light"/>
            {/* Input area */}
            <RN.SafeAreaView style={Styles.overlay}>

                <RN.View style={Styles.inputArea}>

                    <SignInput
                        IconSvg={Svgs.User}
                        placeholder="Digite seu nome"
                        value={nameField}
                        onChangeText={(t: string) => setNameField(t)}
                    />

                    <SignInput
                        IconSvg={Svgs.Email}
                        placeholder="Digite seu e-mail"
                        value={emailField}
                        onChangeText={(t: string) => setEmailField(t)}
                    />
                    
                    <SignInput
                        IconSvg={Svgs.Lock}
                        placeholder="Digite sua senha"
                        value={passwordField}
                        onChangeText={(t: string) => setPasswordField(t)}
                        password={true}
                    />

                    <RN.TouchableOpacity style={Styles.customButton} onPress={signUpClick}>
                        <RN.Text style={Styles.customText}>Cadastre-se</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>

                {/* Area de mensagens */}
                <RN.TouchableOpacity style={Styles.messageArea} onPress={handleGoScreen}>
                    <RN.Text style={Styles.buttonText}>Já tem conta?</RN.Text>
                    <RN.Text style={Styles.buttonBoldText}>Faça o login</RN.Text>
                </RN.TouchableOpacity>

            </RN.SafeAreaView>
        </RN.ImageBackground>
    );
}

export default SignUp;