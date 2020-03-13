<template>
  <div class=" fill-body" id="SurveyControl">
    <NavigationTopbar />
    <main class="app-content fill-body">
      <NavigationSidebar
        v-bind:selectedSurvey="selectedSurvey"
        v-bind:selectedStep="selectedStep"
        v-bind:surveyFpoDetails="surveyFpoDetails"
        v-on:updated-stage="onSidebarClicked"
        v-on:updated-step="onLoadStepTitles"
      />
      <SelectedSurveys
        v-bind:stage="selectedSurvey"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
      />
      <!--SelectedSteps v-bind:step="selectedStep" /-->
      <!--SurveyCreatorComponent /-->
    </main>
    <NavigationFooter id="footer" />
  </div>
</template>

<script>
import NavigationTopbar from "./NavigationTopbar.vue";
import NavigationSidebar from "./NavigationSidebar.vue";
import SelectedSurveys from "./SelectedSurveys.vue";
//import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import NavigationFooter from "./NavigationFooter.vue";

export default {
  name: "SurveyControl",
  components: {
    NavigationTopbar,
    NavigationFooter,
    NavigationSidebar,
    SelectedSurveys
    //ApplicantExperience

    //SurveyCreatorComponent
  },
  computed: {
    stage: {
      get: function() {
        return this.selectedSurvey;
      },
      set: function(newValue) {
        this.selectedSurvey = newValue;
      }
    },
    step: {
      get: function() {
        return this.selectedStep;
      },
      set: function(newValue) {
        this.selectedStep = newValue;
      }
    },
    surveyFpoDetails: {
      get: function() {
        return this.currentSurveyFpoDetails;
      },
      set: function(newValue) {
        this.currentSurveyFpoDetails = newValue;
      }
    }
  },
  data() {
    return {
      selectedSurvey: "getting-started",
      selectedStep: "",
      currentSurveyFpoDetails: {}
    };
  },
  methods: {
    onLoadStepTitles(value) {
      console.log("this.step was '" + this.step + "'");
      this.step = value;
      console.log("this.step is now '" + this.step + "'");
      return value;
    },
    onSidebarClicked(value) {
      console.log("Was '" + this.stage + "'");
      this.stage = value;
      console.log("Is now '" + this.stage + "'");
      return value;
    },
    onUpdateSurveyFpoDetails: function(value) {
      console.log(
        "In SurveyControl.  New FPO stage = '" + JSON.stringify(value) + "'"
      );

      this.surveyFpoDetails = value;
      return value;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
</style>
