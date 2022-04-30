import { ImageSourcePropType } from "react-native";

export type GuidesType = {
    id: number;
    nameGuide: string;
    groups?: boolean;
    phone: string;
    isphotographer: boolean;
    guideGoesInTheCustomerCar: boolean; // Guia vai no carro do cliente [sim ou não]
    attractivesIncluded: [number];
    background: ImageSourcePropType;
    maxPeople?: number;
    minPeople?: number;
    pricePerPeople: number;
    priceSpecial?: number;
    descriptionTour: string;
    whatsToTake: string;
    observations: string;
}