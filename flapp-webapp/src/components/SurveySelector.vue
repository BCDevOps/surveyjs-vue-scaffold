<template>
  <div class="fill-height-lg" id="surveyselector">
    <b-container class="fill-body">
      <!--div id="surveyResult"></div-->
      <GettingStarted v-show="survey === 'getting-started'" />
      <!--<ApplicantInfo v-show="survey === 'applicant-information'" /> -->
      <!-- <SurveyFPO
        v-show="survey === 'surveyfpo'"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
      /> -->
      <SurveyComponent
        v-show="survey === 'surveyfpo'"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
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
    onUpdateSurveyFpoDetails: function(value) {
      console.log(
        "In SurveySelector.  New FPO survey = '" + JSON.stringify(value) + "'"
      );
      this.$emit("updated-survey-fpo-details", value);
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
