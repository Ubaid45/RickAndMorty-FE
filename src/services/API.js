import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
});

export const api = {
    getCharacters: (name) => axiosInstance.get(`/character/?name=${name}`)
}