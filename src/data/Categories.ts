import { CategoryType } from "../types/CategoryType";
import { Svgs, CategoryColorsBg } from "../constants";

const Categories: CategoryType[] = [
    {
        id: 1,
        name: "Viagem",
        icon: Svgs.Plane,
        bgColor: CategoryColorsBg.blue
    },
    {
        id: 2,
        name: "Pousadas",
        icon: Svgs.Bed,
        bgColor: CategoryColorsBg.orange
    },
    {
        id: 3,
        name: "Lugares",
        icon: Svgs.Camera,
        bgColor: CategoryColorsBg.pink
    },
    {
        id: 4,
        name: "Passeios",
        icon: Svgs.Waterfall,
        bgColor: CategoryColorsBg.purple
    },
    {
        id: 5,
        name: "Parques",
        icon: Svgs.LocationPark,
        bgColor: CategoryColorsBg.lightBlue
    }
];

export default Categories;