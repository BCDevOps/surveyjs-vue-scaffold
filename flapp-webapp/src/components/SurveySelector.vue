<template>
  <div class="fill-height-lg" id="surveyselector">
    <b-container class="fill-body">
      <SurveyComponent
        v-for="(survey, index) in surveyJSONs"
        v-show="index === selectedSurveyIndex"
        v-bind:key="index"
        v-bind:surveyIndex="index"
        v-bind:surveyJSON="survey.surveyJSON"
        v-on:updated-survey-details="onUpdateSurveyDetails"
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
    return {
      surveyJSONs: [
        { surveyJSON: startJSON, icon: "fa-headphones" },
        { surveyJSON: fpoJSON, icon: "fa-users" },
        { surveyJSON: flmJSON, icon: "fa-anchor" }
      ]
    };
  },
  created() {
    console.log(
      "In SurveySelector created(): surveyJSONs = " +
        JSON.stringify(this.surveyJSONs)
    );
    this.$emit("created-surveyJSONs", this.surveyJSONs);
  },
  components: {
    SurveyComponent
  },
  methods: {
    onUpdateSurveyDetails: function(value) {
      console.log(
        "In SurveySelector.onUpdateSurveyDetails().  Value = '" +
          JSON.stringify(value) +
          "'"
      );
      this.$emit("updated-survey-details", value);
      return value;
    }
  },
  props: {
    selectedSurveyIndex: Number
  },
  computed: {
    name() {
      return this.$store.state.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
</style>
