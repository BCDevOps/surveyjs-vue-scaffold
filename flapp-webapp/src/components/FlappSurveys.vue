<template>
  <div class=" fill-body" id="flappsurveys">
    <NavigationTopbar />
    <main class="app-content fill-body">
      <NavigationSidebar
        v-bind:selectedSurveyIndex="v_selectedSurveyIndex"
        v-bind:selectedPageIndex="v_selectedPageIndex"
        v-bind:surveyJSONs="v_surveyJSONs"
        v-on:updated-survey-index="onUpdateSurveyIndex"
        v-on:updated-page-index="onUpdatePageIndex"
      />
      <SurveySelector
        v-bind:selectedSurveyIndex="v_selectedSurveyIndex"
        v-on:updated-survey-details="onUpdateSurveyDetails"
        v-on:created-surveyJSONs="onCreatedSurveyJSONs"
      />

      <!--SurveyCreatorComponent /-->
    </main>
    <NavigationFooter id="footer" />
  </div>
</template>

<script>
import NavigationTopbar from "./NavigationTopbar.vue";
import NavigationSidebar from "./NavigationSidebar.vue";
import SurveySelector from "./SurveySelector.vue";
//import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import NavigationFooter from "./NavigationFooter.vue";

import startJSON from "../assets/survey-start-your-application.json";
import fpoJSON from "../assets/survey-fpo.json";
import flmJSON from "../assets/survey-flm.json";

export default {
  name: "FlappSurveys",
  components: {
    NavigationTopbar,
    NavigationFooter,
    NavigationSidebar,
    SurveySelector
    //ApplicantExperience

    //SurveyCreatorComponent
  },
  computed: {
    selectedSurveyIndex: {
      get: function() {
        return this.v_selectedSurveyIndex;
      },
      set: function(newValue) {
        this.v_selectedSurveyIndex = newValue;
      }
    },
    selectedPageIndex: {
      get: function() {
        return this.v_selectedPageIndex;
      },
      set: function(newValue) {
        this.v_selectedPageIndex = newValue;
      }
    },
    surveyDetails: {
      get: function() {
        return this.currentSurveyDetails;
      },
      set: function(newValue) {
        this.currentSurveyDetails = newValue;
      }
    },
    surveyJSONs: {
      get: function() {
        return this.v_surveyJSONs;
      },
      set: function(newValue) {
        this.v_surveyJSONs = newValue;
      }
    }
  },
  data() {
    return {
      v_selectedSurveyIndex: 2,
      v_selectedPageIndex: 0,
      v_surveyJSONs: []
    };
  },
  beforeCreate() {
    var surveyJSONs = [
      { surveyJSON: startJSON, icon: "fa-headphones" },
      { surveyJSON: fpoJSON, icon: "fa-users" },
      { surveyJSON: flmJSON, icon: "fa-anchor" }
    ];

    this.$store.commit("setSurveyJSONs", surveyJSONs);
    this.$store.commit("setSelectedSurveyIndex", 0);
    this.$store.commit("setSelectedPageIndex", 0);
  },
  methods: {
    onUpdatePageIndex(value) {
      console.log(
        "this.selectedPageIndexhis.page was '" + this.selectedPageIndex + "'"
      );
      this.selectedPageIndex = value;
      console.log(
        "this.selectedPageIndex is now '" + this.selectedPageIndex + "'"
      );
      return value;
    },
    onUpdateSurveyIndex(value) {
      console.log(
        "this.selectedSurveyIndex was '" + this.selectedSurveyIndex + "'"
      );
      this.selectedSurveyIndex = value;
      console.log(
        "this.selectedSurveyIndex is now '" + this.selectedSurveyIndex + "'"
      );
      return value;
    },
    onUpdateSurveyDetails: function(value) {
      console.log(
        "In FlappSurveys .  Survey = '" + JSON.stringify(value) + "'"
      );

      this.surveyDetails = value;
      return value;
    },
    onCreatedSurveyJSONs: function(value) {
      this.surveyJSONs = value;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/common";
</style>
