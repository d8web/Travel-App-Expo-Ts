import { View, TextInput } from "react-native";
import Styles from "./styles";
import { SvgProps } from "react-native-svg";
import { Colors } from "../../constants";

type Props = {
    IconSvg: React.FC<SvgProps>,
    placeholder: string,
    value: string,
    onChangeText: (term: string) => void,
    password?: boolean
}

const SignInput = ({ IconSvg, placeholder, value, onChangeText, password }: Props) => {
    return (
        <View style={Styles.container}>
            <IconSvg
                width="24"
                height="24"
                fill={Colors.white}
            />
            <TextInput
                style={Styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.white}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </View>
    );
}

export default SignInput;