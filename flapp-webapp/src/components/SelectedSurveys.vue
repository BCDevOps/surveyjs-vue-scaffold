<template>
  <div class="fill-height-lg" id="selectedsurveys">
    <b-container class="fill-body">
      <!--div id="surveyResult"></div-->
      <GettingStarted v-show="stage === 'getting-started'" />
      <!--<ApplicantInfo v-show="stage === 'applicant-information'" /> -->
      <SurveyFPO
        v-show="stage === 'surveyfpo'"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
      />
      <!-- <FLM v-show="stage === 'flm'" />
      <ChildRelocation v-show="stage === 'child-relocation'" />
      <FormParenting v-show="stage === 'parenting'" />
      <CaseMgmt v-show="stage === 'case-mgmt'" />
      <Enforcement v-show="stage === 'enforcement'" /> -->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import GettingStarted from "./GettingStarted";
//import ApplicantInfo from "./ApplicantInfo.vue";
import SurveyFPO from "./SurveyFPO.vue";
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
  name: "SelectedSurveys",
  data() {
    return {};
  },
  components: {
    GettingStarted,
    //ApplicantInfo,
    SurveyFPO
    //FLM,
    //ChildRelocation,
    //FormParenting,
    //CaseMgmt,
    //Enforcement
  },
  methods: {
    onUpdateSurveyFpoDetails: function(value) {
      console.log(
        "In SelectedSurveys.  New FPO stage = '" + JSON.stringify(value) + "'"
      );
      this.$emit("updated-survey-fpo-details", value);
      return value;
    }
  },
  props: {
    stage: String,
    step: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
</style>
