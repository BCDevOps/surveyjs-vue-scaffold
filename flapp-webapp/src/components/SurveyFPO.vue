<template>
  <div
    class="fill-height-lg survey-container contentcontainer codecontainer"
    id="surveyfpo"
  >
    <h2>FPO form</h2>
    <b-container class="fill-body">
      <survey :survey="survey"></survey>
      <!--div id="surveyResult"></div-->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import surveyPrimaryJSON from "../assets/survey-primary.json";
import { addQuestionTypes } from "./question-types.ts";

SurveyVue.StylesManager.applyTheme("bcgov");
addQuestionTypes(SurveyVue);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "SurveyFPO",
  data() {
    var survey = new SurveyVue.Model(surveyPrimaryJSON);
    // console.log(survey.title);
    // console.log(survey.PageCount);
    // console.log(survey.pages[0].title);
    // console.log(survey.pages[1].title);
    var page_index = 0;
    // for (page in survey.pages) {
    //   page_title = survey.pages[page].title;
    //   console.log(page_title);
    // }
    //console.log("surveyPrimaryJSON = " + JSON.stringify(surveyPrimaryJSON, null, 3));
    console.log("survey = " + survey);
    survey.completeText = "Next";
    return {
      survey: survey,
      survey1: {
        title: survey.title,
        id: "fpo-group",
        pages: [
          {
            title: survey.pages[0].title,
            page_index: 0,
            page_id: "fpo-group-0"
          },
          {
            title: survey.pages[1].title,
            page_index: 1,
            page_id: "fpo-group-1"
          },
          {
            title: "FPO's third page",
            page_index: 2,
            page_id: "fpo-group-2"
          }
        ]
      }
    };
  },
  created() {
    this.$emit("updated-survey-fpo-details", this.survey1);
  },
  methods: {},
  props: {
    page: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
@import "../styles/survey";
</style>
