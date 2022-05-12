import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Map from "../screens/Map";
import Parks from "../screens/Parks";
import Attractive from "../screens/Atractive";
import PopularLocations from "../screens/PopularLocations";
import SinglePark from "../screens/SinglePark";
import Tours from "../screens/Tours";

export type TabStackList = {
    Home: undefined;
    Search: undefined;
    Maps: {
        latitude?: number;
        longitude?: number;
    }
    Favorites: undefined;
    Profile: undefined;
    Parks: undefined;
    SinglePark: {
        id: number;
    };
    Attractive: {
        id: number;
    };
    PopularLocations: undefined;
    Tours: undefined;
};

export type MainTabProps = NativeStackNavigationProp<TabStackList>
const { Navigator, Screen } = createBottomTabNavigator<TabStackList>();

export default () => (
    <Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
            headerShown: false
        }}
    >
        <Screen name="Home" component={Home}/>
        <Screen name="Search" component={Search}/>
        <Screen name="Maps" component={Map}/>
        <Screen name="Favorites" component={Favorites}/>
        <Screen name="Profile" component={Profile}/>
        <Screen name="Parks" component={Parks}/>
        <Screen name="Attractive" component={Attractive}/>
        <Screen name="PopularLocations" component={PopularLocations}/>
        <Screen name="SinglePark" component={SinglePark}/>
        <Screen name="Tours" component={Tours}/>
    </Navigator>
);