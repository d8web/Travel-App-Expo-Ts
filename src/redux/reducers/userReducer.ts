import { createSlice } from "@reduxjs/toolkit";
import { LocationGeocodedAddress } from "expo-location";

type MyState = {
    name: string;
    avatar: string;
    cityObject: LocationGeocodedAddress
}

const initialState = {
    name: "Visitante",
    avatar: "default.jpg",
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
        }
    }
})

export const { setName, setAvatar, changeCityObject } = slice.actions;
export default slice.reducer;