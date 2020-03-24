import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedSurveyIndex: Number,
    selectedPageIndex: Number,
    surveyJSONs: Array
  },
  mutations: {
    listName(state, name) {
      state.name = name;
    },
    listSelectedSurveyIndex(state, selectedSurveyIndex) {
      state.selectedSurveyIndex = selectedSurveyIndex;
    }
  },
  getters: {
    name: state => state.name,
    selectedSurveyIndex: state => state.selectedSurveyIndex
  }
});
