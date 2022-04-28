import { createSlice } from "@reduxjs/toolkit";
import { LocationGeocodedAddress, LocationObject } from "expo-location";

type MyState = {
    name: string;
    avatar: string;
    location: LocationObject | null,
    cityObject: LocationGeocodedAddress
}

const initialState = {
    name: "Visitante",
    avatar: "default.jpg",
    location: null,
    cityObject: {}
} as MyState;

const slice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        changeCityObject: (state, action) => {
            state.cityObject = action.payload
        },
        changeLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export const { setName, setAvatar, changeCityObject, changeLocation } = slice.actions;
export default slice.reducer;