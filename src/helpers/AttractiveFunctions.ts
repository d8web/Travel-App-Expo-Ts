import Attractives from "../data/Attractives";
import { AttractiveType } from "../types/AttractiveType";

export const getOneAttractiveById = (id: number): AttractiveType => {
    let attractiveObject = Attractives.find(item => item.id === id);
    return attractiveObject as AttractiveType;
}