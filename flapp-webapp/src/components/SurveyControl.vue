<template>
  <div class=" fill-body" id="SurveyControl">
    <NavigationTopbar />
    <main class="app-content fill-body">
      <NavigationSidebar
        v-bind:selectedSurvey="selectedSurvey"
        v-bind:selectedPage="selectedPage"
        v-bind:surveyFpoDetails="surveyFpoDetails"
        v-on:updated-survey="onSidebarClicked"
        v-on:updated-page="onLoadPageTitles"
      />
      <SelectedSurveys
        v-bind:survey="selectedSurvey"
        v-on:updated-survey-fpo-details="onUpdateSurveyFpoDetails"
      />

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
      selectedPage: "",
      currentSurveyFpoDetails: {}
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
    onUpdateSurveyFpoDetails: function(value) {
      console.log(
        "In SurveyControl.  New FPO survey = '" + JSON.stringify(value) + "'"
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
