import axios from "./../../service/axios";

export const userState = {
    state: () => ({
        authenticated: false,
        user: null,
    }),
    mutations: {
        SET_AUTHENTICATED(state: any, value: any) {
            state.authenticated = value;
        },

        SET_USER(state: any, value: any) {
            state.user = value;
        },
    },

    actions: {
        async signIn({ dispatch, commit }: any, credentials: any) {
            await axios.get("/sanctum/csrf-cookie");
            await axios
                .post("/api/login", credentials)
                .then(({ data }: any) => {
                    if (data) {
                        if (data.user) commit("SET_USER", data.user);
                        if (data.access_token)
                            localStorage.setItem("token", data.access_token);
                    }
                });

            if (localStorage.getItem("token")) return dispatch("me");
        },

        removeUser({ commit }: any) {
            commit("SET_AUTHENTICATED", false);
            commit("SET_USER", null);
            localStorage.removeItem("token");
        },

        async signOut({ dispatch }: any) {
            if (localStorage.getItem("token"))
                return await axios
                    .post("/api/logout")
                    .then((response: any) => {
                        dispatch("removeUser");
                        return response;
                    })
                    .catch((e) => {
                        dispatch("removeUser");
                        return e;
                    });
        },

        me({ commit, dispatch }: any) {
            if (localStorage.getItem("token"))
                return axios
                    .post("/api/me")
                    .then((response) => {
                        commit("SET_AUTHENTICATED", true);
                        commit("SET_USER", response.data);
                    })
                    .catch(() => {
                        dispatch("removeUser");
                    });
        },
    },
};
