import { createStore } from 'vuex';
import { userState } from './modules/user';

export default createStore({
    state: {
        isDark: false,
        primaryColors: {
            primaryColorDark: '#3cb1ff',
            primaryColorLight: '#008fee',
        },
    },
    modules: {
        user: userState,
    },
});
