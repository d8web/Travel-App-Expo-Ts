import { ImageSourcePropType } from "react-native";

type ImagesAttractive = {
    id: number;
    image: ImageSourcePropType
}

export type AttractiveType = {
    id: number;
    idPark: number | null;
    type: "Mirante" | "Gruta" | "Cachoeira" | "Poço" | "Cânion";
    name: string;
    title: string;
    image: string;
    description: string;
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
    bestPhotos: boolean;
    observations?: string | null;
    photos?: [
        { id: number; url: string }
    ];
}