<template>
  <div class="fill-height-lg survey-container contentcontainer codecontainer">
    <b-container class="fill-body">
      <survey v-bind:survey="survey"></survey>
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
  data() {
    var survey = new SurveyVue.Model(
      this.$store.getters.surveyArray[this.surveyIndex].json
    );

    survey.data = this.$store.getters.surveyArray[this.surveyIndex].data;

    // place the surveyIndex inside the survey object
    survey.custom_surveyIndex = this.surveyIndex;

    survey.onCurrentPageChanged.add((survey, options) => {
      this.onCurrentPageChanged(
        survey.custom_surveyIndex,
        survey.currentPageNo
      );
    });

    survey.onValueChanged.add((survey, options) => {
      if (survey.custom_surveyIndex == 0) {
        // in the getting started form
        this.onStartPageChanged(survey.data.forms);
      } else {
        // in a survey form
        this.onSurveyDataChanged(survey.custom_surveyIndex, survey.data);
      }
    });

    survey.onComplete.add((survey, options) => {
      this.onSurveyComplete(survey.custom_surveyIndex, survey);
    });

    survey.completeText = "Next Form";

    return {
      survey: survey
    };
  },
  created() {},
  methods: {
    onCurrentPageChanged: function(surveyIndex, pageIndex) {
      this.$store.dispatch("setSurveyPageIndex", {
        surveyIndex,
        pageIndex
      });
    },
    onStartPageChanged: function(forms) {
      if (forms == null) {
        forms = [];
      }

      var i;
      for (i = 1; i < this.$store.getters.surveyArray.length; i++) {
        this.$store.dispatch("setSurveySelected", {
          surveyIndex: i,
          surveySelected: forms.includes(i)
        });
      }
    },
    onSurveyDataChanged(surveyIndex, surveyData) {
      if (this.$store.getters.surveyArray[surveyIndex].completed === true) {
        this.$store.dispatch("setSurveyIncomplete", surveyIndex);
      } else {
        this.$store.dispatch("setSurveyData", {
          surveyIndex: surveyIndex,
          surveyData: surveyData
        });
      }
    },
    onSurveyComplete(surveyIndex, survey) {
      if (surveyIndex < this.$store.getters.surveyArray.length) {
        // mark the survey as completed
        this.$store.dispatch("setSurveyCompleted", surveyIndex);

        // set the state to running, keep the data and go to the first page
        // https://github.com/surveyjs/survey-library/issues/897
        survey.clear(false, true);

        // automatically set the surveyIndex to the next selected survey
        var i;
        for (
          i = surveyIndex + 1;
          i < this.$store.getters.surveyArray.length;
          i++
        ) {
          var surveyElement = this.$store.getters.surveyArray[i];

          if (surveyElement.selected) {
            this.$store.dispatch("setSurveyIndex", i);
            break;
          }
        }
      } else {
        // this is the last survey
        // TODO: enable the print button
      }
    }
  },
  props: {
    surveyIndex: Number,
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
