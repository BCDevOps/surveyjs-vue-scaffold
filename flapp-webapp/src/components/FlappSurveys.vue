<template>
  <div class="fill-body" id="flappsurveys">
    <NavigationTopbar />
    <main class="app-content">
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
