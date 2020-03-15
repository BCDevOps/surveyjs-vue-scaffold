<template>
  <div class="fill-height-lg" id="surveyselector">
    <b-container class="fill-body">
      <!--div id="surveyResult"></div-->
      <!--GettingStarted v-show="survey === 'getting-started'" /-->
      <!--<ApplicantInfo v-show="survey === 'applicant-information'" /> -->
      <!-- <SurveyFPO
        v-show="survey === 'surveyfpo'"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
      /> -->
      <SurveyComponent
        v-for="(survey, index) in surveyJSONs"
        v-show="index === activeSurveyIndex"
        v-bind:key="index"
        v-bind:surveyIndex="index"
        v-bind:surveyJSON="survey.surveyJSON"
        v-on:updated-survey-details="onUpdateSurveyDetails"
      />
      <!-- <FLM v-show="survey === 'flm'" />
      <ChildRelocation v-show="survey === 'child-relocation'" />
      <FormParenting v-show="survey === 'parenting'" />
      <CaseMgmt v-show="survey === 'case-mgmt'" />
      <Enforcement v-show="survey === 'enforcement'" /> -->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import GettingStarted from "./GettingStarted";
//import ApplicantInfo from "./ApplicantInfo.vue";
import SurveyFPO from "./SurveyFPO.vue";
import SurveyComponent from "./SurveyComponent.vue";
//import FLM from "./FLM";
//import ChildRelocation from "./ChildRelocation";
//import FormParenting from "./FormParenting.vue";
//import CaseMgmt from "./CaseMgmt.vue";
//import Enforcement from "./Enforcement.vue";

import fpoJSON from "../assets/survey-primary.json";
import flmJSON from "../assets/survey-information.json";

var gettingStartedJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          title: "Which forms apply to you",
          choices: [
            { value: "item1", text: "Family protection order" },
            { value: "item2", text: "Family law matter" },
            { value: "item3", text: "Child relocation" },
            { value: "item4", text: "Parenting arrangements" },
            { value: "item5", text: "Case management" },
            { value: "item6", text: "Enforcement" }
          ]
        }
      ],
      title: "Select your forms"
    }
  ],
  title: "Start Your Application"
};

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
        { surveyJSON: gettingStartedJSON },
        { surveyJSON: fpoJSON },
        { surveyJSON: flmJSON }
      ],
      activeSurveyIndex: 2
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
    GettingStarted,
    //ApplicantInfo,
    SurveyFPO,
    SurveyComponent
    //FLM,
    //ChildRelocation,
    //FormParenting,
    //CaseMgmt,
    //Enforcement
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
    survey: String,
    page_title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
</style>
