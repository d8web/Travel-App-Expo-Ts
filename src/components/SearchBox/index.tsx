import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { makeLocationSearch } from "../../services/Api";
import { AttractiveType } from "../../types/AttractiveType";
import SearchBoxItem from "../SearchBoxItem";

type Item = {
    latitude: number;
    longitude: number;
    guia?: boolean;
}

type Props = {
    dataClick: (item: Item) => void
}

export default (props: Props) => {

    const [ textInput, setTextInput ] = useState("");
    const [ results, setResults ] = useState<AttractiveType[]>([]);

    const handleTextInput = (text: string) => {
        setTextInput(text);
    }

    const handleSearch = () => {
        if(textInput != "") {
            // Search
            setResults(makeLocationSearch(textInput))  
        }
    }

    useEffect(() => {
        const verify = () => {
            if(textInput == "") {
                setResults([]);
            }
        }

        verify();
    }, [textInput]);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput
                    style={styles.input}
                    value={textInput}
                    placeholder="Onde quer ir hoje?"
                    onChangeText={handleTextInput}
                    onEndEditing={handleSearch}
                />
            </View>
            {results.length > 0 &&
                <ScrollView style={styles.results}>
                    
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
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    box: {
        width: "90%",
        height: 50,
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#ccc",
        elevation: 4,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: "#111",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    input: {
        width: "100%",
        height: "100%",
        padding: 10,
        fontSize: 18
    },
    results: {
        width: "90%",
        marginBottom: 40,
        backgroundColor: "transparent",
        borderColor: "#ccc",
    }
});