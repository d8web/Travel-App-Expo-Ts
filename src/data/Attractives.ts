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
            { id: 1, image: Images.Esmeralda },
            { id: 2, image: Images.Esmeralda01 },
            { id: 3, image: Images.Esmeralda02 },
            { id: 4, image: Images.Esmeralda03 },
            { id: 5, image: Images.Esmeralda04 },
            { id: 6, image: Images.Esmeralda05 },
            { id: 7, image: Images.Esmeralda06 },
            { id: 8, image: Images.Esmeralda07 }
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
            { id: 1, image: Images.Zilda01 },
            { id: 2, image: Images.Zilda02 },
            { id: 3, image: Images.Zilda03 },
            { id: 4, image: Images.Zilda04 },
            { id: 5, image: Images.Zilda05 }
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
    },
    {
        id: 3,
        idPark: 2,
        type: "Cachoeira",
        name: "Guatambu",
        title: "Cachoeira do Guatambu",
        images: [
            { id: 1, image: Images.Guatambu },
            { id: 2, image: Images.Guatambu01 },
            { id: 3, image: Images.Guatambu02 },
            { id: 4, image: Images.Guatambu03 },
            { id: 5, image: Images.Guatambu04 },
        ],
        desc: "Uma ambientação diferente e linda com um chuveirão de 6 metros de queda fina sem falar de seu belo poço de agua fria e clara.",
        price: 30,
        latitude: -21.5525045,
        longitude: -44.637381,
        location: "Serra do Moleque",
        vehicleRecomended: false,
        polluted: false,
        guide: false,
        private: true,
        popularLocation: true,
        rate: 4.5,
        walkingLevel: "Médio",
        averageWalkingTime: "15min",
        slipperyStones: true,
        distanceOfCarrancas: "10km",
        placeForChildren: true,
        averageDepth: "1.8m",
        averageHeightOfFall: "6m",
        bestPhotos: true,
        observations: ""
    },
    {
        id: 4,
        idPark: 2,
        type: "Cachoeira",
        name: "Proa",
        title: "Cachoeira da Proa",
        images: [
            { id: 1, image: Images.Proa },
            { id: 2, image: Images.Proa01 },
            { id: 3, image: Images.Proa02 },
            { id: 4, image: Images.Proa03 },
            { id: 5, image: Images.Proa04 },
            { id: 6, image: Images.Proa05 },
        ],
        desc: "Um lindo paredão de pedra com uma corredeira bem forte em sua base.",
        price: 30,
        latitude: -21.5525045,
        longitude: -44.637381,
        location: "Serra do Moleque",
        vehicleRecomended: false,
        polluted: false,
        guide: false,
        private: true,
        popularLocation: true,
        rate: 4.5,
        walkingLevel: "Fácil",
        averageWalkingTime: "10min",
        slipperyStones: true,
        distanceOfCarrancas: "10km",
        placeForChildren: true,
        averageDepth: "5m",
        averageHeightOfFall: null,
        bestPhotos: true,
        observations: ""
    }
];

export default Attractives;