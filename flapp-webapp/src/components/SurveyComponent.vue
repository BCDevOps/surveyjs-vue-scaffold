<template>
  <div class="fill-height-lg survey-container contentcontainer codecontainer">
    <b-container class="fill-body">
      <survey :survey="survey"></survey>
      <!--div id="surveyResult"></div-->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import { addQuestionTypes } from "./question-types.ts";

SurveyVue.StylesManager.applyTheme("bcgov");
addQuestionTypes(SurveyVue);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "SurveyComponent",
  //store,
  data() {
    var survey = new SurveyVue.Model(this.surveyJSON);
    console.log("survey = " + survey);
    survey.completeText = "Next";
    return {
      survey: survey
    };
  },
  created() {
    this.$emit("updated-survey-details", {
      surveyIndex: this.surveyIndex,
      surveyJSON: this.surveyJSON
    });
  },

  props: {
    surveyIndex: Number,
    surveyJSON: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
@import "../styles/survey";
</style>
