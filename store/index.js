/*
 * Data store, managed by Vuex - https://vuex.vuejs.org/
 *
 * Currently just holds our list of movies.
 */

import Vuex from 'vuex';
import api from "../config";

const store = () => {
    return new Vuex.Store({
        state: {
            breed: "affenpinscher",
            movielist: [],
            breedlist: [],
        },
        // data getter helpers
        getters:{
            count(state) {
                return state.movielist.length;
            },
        },
        // syncronous mutations of data
        mutations: {
            set_movies(state, array) {
                state.movielist = array || [];
            },
            set_breeds(state, array) {
                state.breedlist = array || [];
                console.log(array)
            },
            set_breed(state, brd) {
                state.breed = brd;
            }
        },
        // asynchronous actions that contain logic, mutate data
        actions: {
            // fetch movies from server
            fetch_movies(context) {
                api.query_movies(context.state.breed).then(movies =>
                    context.commit('set_movies', movies.message));
            },
            fetch_breeds(context) {
                api.query_breeds().then(movies =>
                    context.commit('set_breeds', Object.keys(movies.message)));
            }
        },
    })
}

export default store;

