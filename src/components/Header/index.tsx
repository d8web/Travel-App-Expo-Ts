import { Image, Text, View } from "react-native";
import Styles from "./styles";

import { Colors, Svgs } from "../../constants";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { LocationGeocodedAddress } from "expo-location";

type Props = {
    cityObject: LocationGeocodedAddress
}

const Header = ({ cityObject }: Props) => {

    const user = useAppSelector(state => state.user);

    return (
        <>
            <View style={Styles.Hero}>
                <Image source={{ uri: user.avatar }} style={Styles.Avatar} />
            </View>

            {cityObject.isoCountryCode !== "" && cityObject.district !== "" &&
                <View style={Styles.LocationAreaInfo}>
                    <Svgs.Location width={18} height={18} fill={Colors.green}/>
                    <Text style={Styles.LocationText}>
                        {cityObject.isoCountryCode}, {cityObject.district}
                    </Text>
                </View>
            }

            <View style={Styles.HelloArea}>
                <Text style={Styles.Hello}>Olá, {user.name}</Text>
                <Text style={Styles.DescriptionHome}>Vamos começar uma nova aventura!</Text>
            </View>
        </>
    )
}

export default Header;