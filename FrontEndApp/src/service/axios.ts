import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${import.meta.env.VITE_APP_URL}`;

export default {
    get: (url: string) => axios.get(url),
    post: (url: string, data: any = null) =>
        axios.post(url, data ? data : {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }),
    put: (url: string, data: any = null) =>
        axios.post(url, data ? data : {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }),
    delete: (url: string) =>
        axios.delete(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }),
};
