import AsyncStorageLib from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';

const BASE_API: string = "http://192.168.1.104/carrancas_backend/public/api";

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
    },
    getAttractives: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/attractives`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    getOneAttractive: async (id: number) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/attractive/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    getPopularAttractives: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/popularlocations`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    search: async (name: string) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/search?q=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    getFavorites: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/user/favorites`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    toogleFavorite: async (id: number) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/user/favorite`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ id_attractive: id })
        })
        const json = await req.json();
        return json;
    },
    getParks: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/parks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    getOnePark: async (id: number) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/park/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    getTours: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/tours`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    updateAvatar: async (formData: FormData) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/user/avatar`, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "content-type": "multipart/form-data",
            },
        });
        const json = await req.json();
        return json;
    },
    getUserInfo: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    },
    updateUser: async (name?: string, email?: string, password?: string, password_confirm?: string) => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/user`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ name, email, password, password_confirm })
        })
        const json = await req.json();
        return json;
    },
    logout: async () => {
        const token = await AsyncStorageLib.getItem("token");

        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await req.json();
        return json;
    }
}

// export const makeLocationSearch = (locTxt: string) => {
//     let res = Attractives.filter(item =>
//         item.name.toLocaleLowerCase().indexOf(locTxt.toLocaleLowerCase()) > -1
//     );
    
//     return res;
// }

export const makeLocationSearch = async (locTxt: string) => {
    const token = await AsyncStorageLib.getItem("token");

    const req = await fetch(`${BASE_API}/search?q=${locTxt}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const json = await req.json();
    return json;
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