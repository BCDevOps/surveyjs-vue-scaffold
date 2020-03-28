import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    surveyIndex: Number,
    surveyJSONs: Array
  },
  getters: {
    surveyIndex: state => state.surveyIndex,
    surveyJSONs: state => state.surveyJSONs
  },
  mutations: {
    setSurveyIndex(state, surveyIndex) {
      state.surveyIndex = surveyIndex;
    },
    setSurveyPageIndex(state, obj) {
      state.surveyJSONs[obj.surveyIndex].pageIndex = obj.pageIndex;
    },
    setSurveyJSONs(state, surveyJSONs) {
      state.surveyJSONs = surveyJSONs;
    }
  },
  actions: {
    setSurveyIndex(context, surveyIndex) {
      context.commit("setSurveyIndex", surveyIndex);
    },
    setSurveyPageIndex(context, obj) {
      context.commit("setSurveyPageIndex", obj);
    },
    setSurveyJSONs(context, surveyJSONs) {
      context.commit("setSurveyJSONs", surveyJSONs);
    }
  }
});
