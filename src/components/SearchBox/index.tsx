import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView } from "react-native";
import Styles from "./styles";

import { AttractiveType } from "../../types/AttractiveType";
import { makeLocationSearch } from "../../services/Api";
import SearchBoxItem from "../SearchBoxItem";

type Props = {
    dataClick: (item: AttractiveType) => void;
}

const SearchBox = (props: Props) => {

    const [ textInput, setTextInput ] = useState("");
    const [ results, setResults ] = useState<AttractiveType[]>([]);

    const handleTextInput = (text: string) => {
        setTextInput(text);
    }

    const handleSearch = () => {
        if(textInput != "") {
            setResults(makeLocationSearch(textInput));
        }
    }

    useEffect(() => {
        const verify = () => {
            if(textInput === "") {
                setResults([]);
            }
        }

        verify();
    }, [textInput]);

    return (
        <View style={Styles.Container}>
            <View style={Styles.Box}>
                <TextInput
                    style={Styles.Input}
                    value={textInput}
                    placeholder="Onde quer ir hoje?"
                    onChangeText={handleTextInput}
                    onEndEditing={handleSearch}
                />
            </View>
            {results.length > 0 &&
                <ScrollView style={Styles.Results}>
                    
                    {results.map((item: AttractiveType, key) => (
                        <SearchBoxItem
                            key={key}
                            data={item}
                            dataClick={() => {
                                props.dataClick(item);
                                setTextInput("");
                                setResults([]);
                            }}
                        />
                    ))}

                </ScrollView>
            }
        </View>
    );
}

export default SearchBox;