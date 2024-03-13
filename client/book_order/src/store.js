import { createStore } from "vuex";

import User from "./models/User";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Define the intial state of the store
const state = {
    user: User.from(localStorage?.token),
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token')     // Check if a token exists for determining user login status
}

// Define mutations to modify the state
const mutations = {
    [LOGIN]: (state, data) => {
        state.token = data.token;                   // Set the token in the state
        state.user = User.from(data.token);         // Create a user interface from the new token
        localStorage.setItem('token', data.token);  // Save the token to the local storage
    },
    [LOGOUT]: (state) => {
        state.token = null;                         // Set the token null in the store
        state.user = null;                          // Set the user null in the store
        localStorage.removeItem('token')            // Remove the token from the localstorage
    }
}

// Define getters to access the state
const getters = {
    currentUser: state => {
        return state.user;                          // Return the current user from the state
    },
    isLoggedIn: state => {
        return state.isLoggedIn;                    // Return the login status from the state
    }
}

// Define actions to commit mutations
const actions = {
    login({ commit }) {
        commit(LOGIN);                              // Commit the LOGIN mutations
    },
    logout({ commit }) {
        commit(LOGOUT);                             // Commit the LOGOUT mutations
    }
}

// Create and export the Vuex store instance to be used in Vue application
export default createStore({
    state,
    mutations,
    getters,
    actions
})




