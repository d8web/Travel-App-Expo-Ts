import { SvgProps } from "react-native-svg";

export type CategoryType = {
    id: number;
    name: string;
    icon: React.FC<SvgProps>,
    bgColor: string;
}