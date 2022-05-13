import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

import { useDispatch } from "react-redux";
import { setAvatar, setName } from "../../redux/reducers/userReducer";
import Api from '../../services/Api';
import { TextInput } from 'react-native-gesture-handler';
import Styles from './styles';
import { UserType } from '../../types/UserType';
import { Colors } from '../../constants';

const Profile = () => {

    const { avatar, name } = useAppSelector(state => state.user);
    const dispatch = useDispatch();

    const changeName = (newName: string) => dispatch( setName(newName) );
    const changeAvatar = (newAvatar: string) => dispatch( setAvatar(newAvatar) );

    const [ loading, setLoading ] = useState<boolean>(false);
    const [ userInfo, setUserInfo ] = useState<UserType | null>(null);

    const [ nameField, setNameField ] = useState<string>("");
    const [ emailField, setEmailField ] = useState<string>("");
    const [ passwordField, setPasswordField ] = useState<string>("");
    const [ passwordConfirmField, setPasswordConfirmField ] = useState<string>("");


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        if(!result.cancelled) {
            // console.log(result);

            let uriParts = result.uri.split('.');
            let fileType = uriParts[uriParts.length - 1];

            let formData = new FormData();

            formData.append('avatar', {
                uri: result.uri,
                name: `photo.${fileType}`,
                type: `image/${fileType}`,
            });

            let json = await Api.updateAvatar(formData);
            // console.log(json);
            if(json.error === "" && json.avatar !== "") {
                changeAvatar(json.avatar);
            }

        } else {
            console.log(result);
        }
    };

    const saveProfile = () => {
        //setLoading(true);

        let fields = [];

        if(nameField !== "" && nameField !== name) {
            fields.push({ name: nameField });
        }

        if(emailField !== userInfo?.email) {
            fields.push({ email: emailField });
        }

        if(passwordField !== "" && passwordConfirmField !== "" && passwordField === passwordConfirmField) {
            fields.push({ password: passwordField, password_confirm: passwordConfirmField });
        } else {
            // alert("As senhas precisam estar preenchidas e ter o mesmo valor!");
        }

        if(fields.length > 0) {
            fields.forEach(async (item, key) => {
                let json = await Api.updateUser(item?.name, item?.email, item?.password, item?.password_confirm);
                if(json.error !== "") {
                    alert(json.error);
                } else {
                    // console.log(json.data)
                    if(json.data.name) {
                        changeName(json.data.name);
                        alert("Nome atualizado com sucesso!");
                    }

                    if(json.data.email) {
                        alert("Email atualizado com sucesso!");
                    }

                    if(json.data.password) {
                        alert("Senha atualizada com sucesso!");
                    }

                    getUserInfo();
                }
            })
        }

        // console.log(fields)
        setLoading(false);
    }

    const getUserInfo = async () => {
        setLoading(true);

        let json = await Api.getUserInfo();
        if(json.error === "") {
            setUserInfo(json.data);
            setNameField(json.data.name);
            setEmailField(json.data.email);
        }

        setLoading(false);
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <>
            {loading && userInfo !== null ?
                <View style={Styles.LoadingArea}>
                    <ActivityIndicator size="large" color={Colors.dark} />
                    <Text>Carregando...</Text>
                </View>
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    {avatar && <Image source={{ uri: avatar }} style={Styles.Avatar}/>}
                    <Button title="Trocar foto" onPress={pickImage} />

                    <View style={Styles.InputArea}>
                        <TextInput
                            placeholder="Digite seu nome"
                            style={Styles.InputItem}
                            value={nameField}
                            onChangeText={t => setNameField(t)}
                        />
                        <TextInput
                            placeholder="Digite seu e-mail"
                            style={Styles.InputItem}
                            value={emailField}
                            onChangeText={t => setEmailField(t)}
                        />
                        <TextInput
                            placeholder="Digite sua senha"
                            style={Styles.InputItem}
                            value={passwordField}
                            onChangeText={t => setPasswordField(t)}
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Repita sua senha"
                            style={Styles.InputItem}
                            value={passwordConfirmField}
                            onChangeText={t => setPasswordConfirmField(t)}
                            secureTextEntry={true}
                        />
                        <Button title="Salvar" onPress={saveProfile} />
                    </View>

                </View>
            }
        </>
    );
}

export default Profile;