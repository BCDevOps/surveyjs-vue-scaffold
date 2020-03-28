<template>
  <div class="fill-height-lg" id="surveyselector">
    <b-container class="fill-body">
      <SurveyComponent
        v-for="(survey, index) in $store.getters.surveyJSONs"
        v-show="index === $store.getters.surveyIndex"
        v-bind:key="index"
        v-bind:surveyIndex="index"
        v-bind:surveyJSONs="$store.getters.surveyJSONs"
        v-bind:pageIndex="survey.pageIndex"
      />
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import SurveyComponent from "./SurveyComponent.vue";
import startJSON from "../assets/survey-start-your-application.json";
import fpoJSON from "../assets/survey-fpo.json";
import flmJSON from "../assets/survey-flm.json";

SurveyVue.StylesManager.applyTheme("bcgov");

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "SurveySelector",
  data() {
    return {};
  },
  created() {},
  components: {
    SurveyComponent
  },
  methods: {},
  props: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
</style>
