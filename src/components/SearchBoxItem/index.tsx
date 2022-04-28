import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    data: { title: string, name: string }
    dataClick: (data: { title: string }) => any
}

export default (props: Props) => {

    const itemClick = () => {
        props.dataClick(props.data)
    }

    return (
        <TouchableOpacity
            style={styles.itemArea}
            onPress={itemClick}
        >
            <Text style={styles.txt}>
                {props.data.name}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemArea: {
        height: 50,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    txt: {
        fontSize: 18
    }
});