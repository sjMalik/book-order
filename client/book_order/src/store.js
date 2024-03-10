import { createStore } from 'vuex'

import User from '@/models/User'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const state = {
    user: User.from(localStorage.token),
    token: localStorage.getItem("token"),
    isLoggedIn: !!localStorage.getItem("token")
};

const mutations = {
    [LOGIN]: (state, data) => {
        state.token = data.token;
        state.user = User.from(data.token);
        state.orgIndex = 0;
        localStorage.setItem("token", data.token);
    },
    [LOGOUT]: (state) => {
        state.token = null;
        state.user = null;
        localStorage.removeItem("token");
    }
};

const getters = {
    currentUser: state => {
        return state.user
    },
    isLoggedIn: state => {
        return state.isLoggedIn
    }
};

const actions = {
    login({ commit }) {
        commit(LOGIN)
    },

    logout({ commit }) {
        commit(LOGOUT)
    }
};

export default createStore({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})
