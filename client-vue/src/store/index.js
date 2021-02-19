import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vue store
export default new Vuex.Store({
    state: {
        APIbaseUrl: "http://localhost:5000/",

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
        },
        // API base url
        getAPIurl: state => {
            if (process.env.NODE_ENV == "production")  //Heroku
              return window.location.href
            else
              return state.APIbaseUrl
        }
    }
})