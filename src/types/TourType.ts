import { AttractiveType } from "./AttractiveType";

export type TourType = {
    id: number;
    idAgency: number;
    name: string;
    meansOfLocomotion: string;
    background: string;
    attractivesIncluded: string;
    guidesOnVehicleClient: boolean;
    pricePerPeople: number;
    agencyInfo: {
        name: string;
        type: string;
        phone: string;
    }
    // attractives: AttractiveType[]
}