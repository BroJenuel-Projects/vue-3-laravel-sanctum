import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";

export default {
    get: (url: string) => axios.get(url),
    post: (url: string, data: any = null) =>
        axios.post(url, data ? data : {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }),
    put: (url: string, data: any = null) =>
        axios.post(url, data ? data : {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }),
    delete: (url: string) =>
        axios.delete(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }),
};
