<template>
  <div id="surveyselector" class="app-main">
    <b-container>
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
import SurveyComponent from "./SurveyComponent.vue";
import startJSON from "../assets/survey-start-your-application.json";
import fpoJSON from "../assets/survey-fpo.json";
import flmJSON from "../assets/survey-flm.json";

export default {
  name: "SurveySelector",
  data() {
    return {
      surveyJSONs: [
        { surveyJSON: startJSON },
        { surveyJSON: fpoJSON },
        { surveyJSON: flmJSON }
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
  }
};
</script>
