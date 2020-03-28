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

export default {
  name: "SurveyComponent",
  //store,
  data() {
    var survey = new SurveyVue.Model(
      this.surveyJSONs[this.surveyIndex].surveyJSON
    );

    // place the surveyIndex inside the survey object
    survey.custom_SurveyIndex = this.surveyIndex;

    survey.onCurrentPageChanged.add((sender, options) => {
      this.onCurrentPageChanged(
        sender.custom_SurveyIndex,
        sender.currentPageNo
      );
    });

    survey.completeText = "Next";

    return {
      survey: survey
    };
  },
  created() {
    console.log(
      "surveyIndex: " +
        this.surveyIndex +
        ", pageIndex: " +
        this.surveyJSONs[this.surveyIndex].pageIndex
    );
  },
  methods: {
    onCurrentPageChanged: function(surveyIndex, pageIndex) {
      this.$store.dispatch("setSurveyPageIndex", {
        surveyIndex: surveyIndex,
        pageIndex: pageIndex
      });
    }
  },
  props: {
    surveyIndex: Number,
    surveyJSONs: Array,
    pageIndex: Number
  },
  watch: {
    pageIndex: function(newVal, oldVall) {
      this.survey.currentPageNo = newVal;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
@import "../styles/survey";
</style>
