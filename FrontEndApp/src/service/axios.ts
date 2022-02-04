import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${import.meta.env.VITE_APP_URL}`;

export const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
};
export const apiURL = `${import.meta.env.VITE_APP_URL}`;

export default {
    get: (url: string, authorize = false) =>
        axios.get(
            url,
            authorize
                ? {
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`,
                      },
                  }
                : {}
        ),
    post: (url: string, data: any = null) =>
        axios.post(url, data ? data : {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }),
    put: (url: string, data: any = null) =>
        axios.put(url, data ? data : {}, {
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
    download: (url: string, authorize = false, options: { downloadProgress: any } | null | undefined = null) =>
        axios.get(
            url,
            authorize
                ? {
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`,
                      },
                      responseType: 'blob',
                      onDownloadProgress: (progressEvent) => {
                          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);

                          options?.downloadProgress(progress);
                      },
                  }
                : { responseType: 'blob' }
        ),
};
