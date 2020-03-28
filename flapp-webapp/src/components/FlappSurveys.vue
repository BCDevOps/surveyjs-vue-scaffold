<template>
  <div class=" fill-body" id="flappsurveys">
    <NavigationTopbar />
    <main class="app-content fill-body">
      <NavigationSidebar />
      <SurveySelector />

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
  },
  computed: {},
  data() {
    return {};
  },
  beforeCreate() {
    var surveyJSONs = [
      { surveyJSON: startJSON, icon: "fa-headphones", pageIndex: 0 },
      { surveyJSON: fpoJSON, icon: "fa-users", pageIndex: 0 },
      { surveyJSON: flmJSON, icon: "fa-anchor", pageIndex: 0 }
    ];

    this.$store.dispatch("setSurveyJSONs", surveyJSONs);
    this.$store.dispatch("setSurveyIndex", 0);
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/common";
</style>
