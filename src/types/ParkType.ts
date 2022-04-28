import { ImageSourcePropType } from "react-native";
import { AttractiveType } from "./AttractiveType";

export type ParkType = {
    id: number;
    name: string;
    image: ImageSourcePropType[] | string;
    price: number;
    wifi: boolean;
    bath: boolean;
    restaurant: boolean;
    parking: boolean;
    private: boolean;
    hotel: boolean;
    attractives: AttractiveType[] | [];
    quantityAttractives: number;
    mainWaterfall: string | null;
    latitude: number;
    longitude: number;
}