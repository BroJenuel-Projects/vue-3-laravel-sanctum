import { createStore } from "vuex";
import { userState } from "./modules/user";

export default createStore({
    state: {},
    modules: {
        user: userState
    },
})
