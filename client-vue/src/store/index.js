import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vue store
export default new Vuex.Store({
    state: {
        footerData: {
            year: 2021,
            name: "Classicoman",
        },
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        getYear: state => {
            return state.footerData.year
        },
        getName: state => {
            return state.footerData.name
        }
    }
})