import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Styles from "./styles";
import { CategoryType } from "../../types/CategoryType";
import { Colors } from "../../constants";
import { MainTabProps } from "../../stacks/MainTab";

const CategoryItem = (item: CategoryType, index: number, navigation: MainTabProps) => {

    const handleGoScreen = (id: number) => {
        if(id === 5) {
            navigation.navigate("Parks");
        } else {
            alert("ok")
        }
    }

    return (
        <View style={{
            marginLeft: index == 0 ? 15 : 20,
            marginRight: index == 4 ? 15 : 0,
            alignItems: "center"
        }}>
            <TouchableOpacity
                style={[
                    Styles.FlatArea,
                    {
                        backgroundColor: item.bgColor,
                        shadowColor: item.bgColor
                    }
                ]}
                onPress={() => handleGoScreen(item.id)}
            >
                <item.icon width={30} height={30} fill={Colors.white} />
            </TouchableOpacity>
            <Text style={Styles.CatName}>{item.name}</Text>
        </View>
    );
}

export default CategoryItem;