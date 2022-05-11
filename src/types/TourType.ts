import { ImageSourcePropType } from "react-native";

export type TourType = {
    id: number;
    meansOfLocomotion: "4X4" | "Carro padrão" | "Quadriciclo" | "Bicicleta" | "Cavalo" | "Caminhada";
    attractivesIncluded: [number];
    background: ImageSourcePropType;
    video?: string;
    groups?: boolean; // Leva grupos [sim, não]
    maxPeople: number;
    minPeople: number;
    pricePerPeople: number;
    priceSpecial?: number;
    descriptionTour: string;
    whatsToTake: string;
    observations: string;
}