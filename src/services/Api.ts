import AsyncStorageLib from "@react-native-async-storage/async-storage";
import Attractives from "../data/Attractives";

const BASE_API: string = "https://api.b7web.com.br/devbarber/api";

export default {
    checkToken: async (token: string) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email: string, password: string) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },
    signUp: async (name: string, email: string, password: string) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;
    }
}

export const makeLocationSearch = (locTxt: string) => {
    let res = Attractives.filter((item) => item.name.toLocaleLowerCase().indexOf(locTxt.toLocaleLowerCase()) > -1)
    return res;
}

export const makeTripLocationSearch = (origin: string, destination: string) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let array = [
                { id: 1, type: 'Uber Standart', price: 12 },
                { id: 1, type: 'Uber Medium', price: 15 },
                { id: 1, type: 'Uber Hard', price: 25 },
            ];

            resolve(array);
        }, 1000);

    });
}