import { AttractiveType } from "../types/AttractiveType";
import { Images } from "../constants";

const Attractives: AttractiveType[] = [
    {
        id: 1,
        idPark: 1,
        type: "Cachoeira",
        name: "Esmeralda",
        image: Images.Esmeralda07,
        desc: "Uma linda cachoeira",
        price: 10,
        latitude: -21.468829,
        longitude: -44.7051156,
        location: "Vargem Grande",
        vehicleRecomended: false,
        polluted: false,
        guide: false,
        private: true,
        popularLocation: true,
        rate: 5,
        walkingLevel: "Fácil",
        averageWalkingTime: "15min",
        slipperyStones: true, // pedras lisas escorregadias
        distanceOfCarrancas: "10km",
        placeForChildren: true,
        averageDepth: "5m",
        averageHeightOfFall: "1m",
        observations: ""
    },
    {
        id: 2,
        idPark: 2,
        type: "Cachoeira",
        name: "Zilda",
        image: Images.Zilda02,
        desc: "Uma linda cachoeira",
        price: 30,
        latitude: 10,
        longitude: 10,
        location: "Serra do Moleque",
        vehicleRecomended: false,
        polluted: false,
        guide: false,
        private: true,
        popularLocation: true,
        rate: 5,
        walkingLevel: "Fácil",
        averageWalkingTime: "5min",
        slipperyStones: true,
        distanceOfCarrancas: "10km",
        placeForChildren: true,
        averageDepth: "5m",
        averageHeightOfFall: "4m",
        observations: ""
    }
];

export default Attractives;