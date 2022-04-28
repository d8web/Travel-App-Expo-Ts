import { ImageSourcePropType } from "react-native";

export type AttractiveType = {
    id: number;
    idPark: number | null;
    type: "Mirante" | "Gruta" | "Cachoeira" | "Poço" | "Cânion";
    name: string;
    title: string;
    image: ImageSourcePropType;
    desc: string;
    price: number;
    latitude: number;
    longitude: number;
    location: string;
    vehicleRecomended: boolean;
    polluted: boolean;
    guide: boolean;
    private: boolean;
    popularLocation: boolean;
    rate: number;
    walkingLevel: "Fácil" | "Médio" | "Difícil",
    averageWalkingTime: string; // Tempo de caminhada até o atrativo
    slipperyStones: boolean,
    distanceOfCarrancas: string;
    placeForChildren: boolean;
    averageDepth: string;
    averageHeightOfFall?: string | null;
    observations?: string | null;
}