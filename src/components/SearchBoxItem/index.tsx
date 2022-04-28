import React from "react";
import Styles from "./styles";
import { TouchableOpacity, Text } from 'react-native';
import { AttractiveType } from "../../types/AttractiveType";

type Props = {
    data: AttractiveType
    dataClick: (data: AttractiveType) => any
}

const SearchBoxItem = (props: Props) => {

    const itemClick = () => {
        props.dataClick(props.data);
    }

    return (
        <TouchableOpacity
            style={Styles.ItemArea}
            onPress={itemClick}
        >
            <Text style={Styles.Txt}>
                {props.data.name}
            </Text>
        </TouchableOpacity>
    );
}

export default SearchBoxItem;