import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Map from "../screens/Map";
import Parks from "../screens/Parks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TabStackList = {
    Home: undefined;
    Search: undefined;
    Maps: undefined;
    Favorites: undefined;
    Profile: undefined;
    Parks: undefined;
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
    </Navigator>
);