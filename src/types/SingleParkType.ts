export type AttractiveSinglePark = {
    id: number;
    idPark: number;
    image: string;
    location: string;
    price: number;
    title: string;
}

export type SingleParkType = {
    attractives: AttractiveSinglePark[];
    bath: boolean;
    hotel: boolean;
    id: number;
    image: string;
    latitude: string;
    longitude: string;
    mainWaterfall: string;
    name: string;
    parking: boolean;
    price: number;
    private: boolean;
    restaurant: boolean;
    wifi: boolean;
}