import { LocationObject, reverseGeocodeAsync } from "expo-location";

export const GetRegionName = async (location: LocationObject) => {
    let { coords } = location;
    let { latitude, longitude } = coords;

    let regionName = await reverseGeocodeAsync({ longitude, latitude });
    return regionName;
}