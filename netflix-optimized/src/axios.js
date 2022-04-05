import axios from "axios";

//base url to make requests to the movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//the idea is, we export this, and we have the bones to make requests