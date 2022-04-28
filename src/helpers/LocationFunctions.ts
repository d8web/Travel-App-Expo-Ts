import * as Location from "expo-location";

export const GetRegionName = async (location: Location.LocationObject) => {
    let { coords } = location;
    let { latitude, longitude } = coords;

    let regionName = await Location.reverseGeocodeAsync({ longitude, latitude });
    return regionName;
}