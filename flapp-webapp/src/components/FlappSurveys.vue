<template>
  <div class=" fill-body" id="flappsurveys">
    <NavigationTopbar />
    <main class="app-content fill-body">
      <NavigationSidebar
        v-bind:selectedSurvey="selectedSurvey"
        v-bind:selectedPage="selectedPage"
        v-bind:surveyDetails="surveyDetails"
        v-bind:surveyJSONs="currentSurveyJSONs"
        v-on:updated-survey="onSidebarClicked"
        v-on:updated-page="onLoadPageTitles"
      />
      <SurveySelector
        v-bind:survey="selectedSurvey"
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
    survey: {
      get: function() {
        return this.selectedSurvey;
      },
      set: function(newValue) {
        this.selectedSurvey = newValue;
      }
    },
    page: {
      get: function() {
        return this.selectedPage;
      },
      set: function(newValue) {
        this.selectedPage = newValue;
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
        return this.currentSurveyJSONs;
      },
      set: function(newValue) {
        this.currentSurveyJSONs = newValue;
      }
    }
  },
  data() {
    return {
      selectedSurvey: "getting-started",
      selectedPage: "",
      currentSurveyJSONs: [],
      currentSurveyDetails: {}
    };
  },
  methods: {
    onLoadPageTitles(value) {
      console.log("this.page was '" + this.page + "'");
      this.page = value;
      console.log("this.page is now '" + this.page + "'");
      return value;
    },
    onSidebarClicked(value) {
      console.log("Was '" + this.survey + "'");
      this.survey = value;
      console.log("Is now '" + this.survey + "'");
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
