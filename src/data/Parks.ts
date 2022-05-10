import { AttractiveType } from "../types/AttractiveType";
import { ParkType } from "../types/ParkType";

import { Images } from "../constants";

// const getAttractivesFromPark = (idPark: number, Attractives: AttractiveType[]): AttractiveType[] | [] => {
//     const attractivesPark = Attractives.filter(item => item.idPark === idPark);
//     return attractivesPark;
// }

const Parks: ParkType[] = [
    {
        id: 1,
        name: "Vargem Grande",
        image: [Images.Esmeralda, Images.Esmeralda03],
        price: 10,
        wifi: true,
        bath: true,
        restaurant: true,
        parking: true,
        private: true,
        hotel: false,
        attractives: [],
        quantityAttractives: 1,
        mainWaterfall: "Esmeralda",
        latitude: 10,
        longitude: 10
    },
    {
        id: 2,
        name: "Serra do Moleque",
        image: [Images.Zilda, Images.Zilda01],
        price: 30,
        wifi: true,
        bath: true,
        restaurant: true,
        parking: true,
        private: true,
        hotel: false,
        attractives: [],
        quantityAttractives: 3,
        mainWaterfall: "Cachoeira da Zilda",
        latitude: 10,
        longitude: 10
    },
    {
        id: 3,
        name: "Complexo Tira-Prosa",
        image: [Images.TiraProsa, Images.TiraProsa01], // Mudar imagens [Todo]
        price: 10,
        wifi: true,
        bath: true,
        restaurant: false,
        parking: true,
        private: true,
        hotel: true,
        attractives: [],
        quantityAttractives: 3,
        mainWaterfall: "Poço Tira Prosa",
        latitude: 10,
        longitude: 10
    }
];

export default Parks;