import { AttractiveType } from "../types/AttractiveType";
import { Images } from "../constants";

const Attractives: AttractiveType[] = [
    {
        id: 1,
        idPark: 1,
        type: "Cachoeira",
        name: "Esmeralda",
        title: "Cachoeira da Esmeralda",
        images: [
            {
                id: 1,
                image: Images.Esmeralda07
            },
            {
                id: 2,
                image: Images.Esmeralda01
            }
        ],
        desc: "Uma bela fonte com água verde e cristalina formada pela cachoeira da Esmeralda. Oferece momentos de contato direto e sintonia com o lugar. Sem dúvida uma das cachoeiras mais bonitas de Carrancas. A cachoeira da Esmeralda é de uma beleza incrível. Um lugar onde você pode se reconectar com a Mãe Natureza!",
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
        bestPhotos: true,
        observations: ""
    },
    {
        id: 2,
        idPark: 2,
        type: "Cachoeira",
        name: "Zilda",
        title: "Cachoeira da Zilda",
        images: [
            {
                id: 1,
                image: Images.Zilda02
            }
        ],
        desc: "Uma linda queda com um poço um pouco agitado, além de uma bela pequena praia para descansar, assim podemos descrever esse lugar.Quer descansar e ainda apreciar a natureza? Conheça a cachoeira da Zilda.",
        price: 30,
        latitude: -21.5539006,
        longitude: -44.638605,
        location: "Serra do Moleque",
        vehicleRecomended: false,
        polluted: false,
        guide: false,
        private: true,
        popularLocation: true,
        rate: 4.5,
        walkingLevel: "Fácil",
        averageWalkingTime: "5min",
        slipperyStones: true,
        distanceOfCarrancas: "10km",
        placeForChildren: true,
        averageDepth: "5m",
        averageHeightOfFall: "4m",
        bestPhotos: true,
        observations: ""
    }
];

export default Attractives;