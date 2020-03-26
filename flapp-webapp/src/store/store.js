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
    setSelectedSurveyIndex(state, surveyIndex) {
      state.selectedSurveyIndex = surveyIndex;
    },
    setSelectedPageIndex(state, pageIndex) {
      state.selectedPageIndex = pageIndex;
    },
    setSurveyJSONs(state, surveyJSONs) {
      state.surveyJSONs = surveyJSONs;
    }
  },
  getters: {
    selectedSurveyIndex: state => state.selectedSurveyIndex,
    selectedPageIndex: state => state.selectedPageIndex,
    surveyJSONs: state => state.surveyJSONs
  }
});
