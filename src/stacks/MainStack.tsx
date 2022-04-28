import {
    createNativeStackNavigator,
    NativeStackNavigationProp
} from "@react-navigation/native-stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MainTab from "./MainTab";

export type RootStackParamList = {
    Preload: undefined;
    SignIn: undefined;
    SignUp: undefined;
    MainTab: undefined;
};

export type MainStackProps = NativeStackNavigationProp<RootStackParamList>
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
    return (
        <Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Preload" component={Preload} />
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="MainTab" component={MainTab} />
        </Navigator>
    );
}