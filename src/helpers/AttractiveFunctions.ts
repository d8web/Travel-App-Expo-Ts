import { AttractiveType } from "../types/AttractiveType";

export const getOneAttractiveById = (id: number, Attractives: AttractiveType[]): AttractiveType => {
    let attractiveObject = Attractives.find(item => item.id === id);
    return attractiveObject as AttractiveType;
}

export const getAttractivesListFromPark = (idPark: number, id: number, Attractives: AttractiveType[]) => {
    let attractivesFromPark = Attractives.filter((item) => {
        return item.idPark === idPark && item.id !== id
    });
    return attractivesFromPark;
}