import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vue store
export default new Vuex.Store({
  state: {
    // Local URL
    APIbaseUrl: "http://localhost:5000/",
    // Basic data
    footerData: {
      year: 2021,
      name: "@classicoman",
    },

    count: 0,

    pagination: {
      // Start
      start: 0,
      // Increment: 5 by default
      inc: 5
    }
  },

  mutations: {
    // mock mutation
    INCREMENT(state) {
      state.count++
    },


    PAGINATION_BACK(state) {
      state.pagination.start -= state.pagination.inc
    },

    PAGINATION_FORWARD(state) {
      state.pagination.start += state.pagination.inc
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

      console.log("url de la web:", window.location.href.split("://")[1].split(":")[0])

      if (window.location.href.split("://")[1].split(":")[0] === "localhost")  //Heroku
        return state.APIbaseUrl
      else
        return window.location.href.split("/#")[0]
    }
  }

})