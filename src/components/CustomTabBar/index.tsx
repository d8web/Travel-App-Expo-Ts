import { TouchableOpacity, View } from "react-native";
import Styles from "./styles";

import { Svgs } from "../../constants";

type Props = {
    state: {
        index: number;
    };
    navigation: {
        navigate: (name: string) => void;
    };
}

const CustomTabBar = ({ state, navigation }: Props) => {

    const handleGo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={Styles.TabArea}>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Home")}
            >
                <Svgs.Home
                    style={{ opacity: state.index === 0 ? 1 : 0.6 }}
                    width={26}
                    height={26}
                    fill="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Search")}
            >
                <Svgs.Search
                    style={{ opacity: state.index === 1 ? 1 : 0.6 }}
                    width={26}
                    height={26}
                    fill="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Maps")}
            >
                <Svgs.Location
                    style={{ opacity: state.index === 2 ? 1 : 0.6 }}
                    width={24}
                    height={24}
                    fill="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Favorites")}
            >
                <Svgs.Favorite
                    style={{ opacity: state.index === 3 ? 1 : 0.6 }}
                    width={26}
                    height={26}
                    fill="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.TabItem}
                onPress={() => handleGo("Profile")}
            >
                <Svgs.User
                    style={{ opacity: state.index === 4 ? 1 : 0.6 }}
                    width={26}
                    height={26}
                    fill="#fff"
                />
            </TouchableOpacity>
            
        </View>
    );
}

export default CustomTabBar;