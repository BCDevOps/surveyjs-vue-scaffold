<template>
  <div class="fill-body" id="flappsurveys">
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

//import startJson from "../assets/survey-start-your-application.json";
import fpoJson from "../assets/survey-fpo.json";
import flmJson from "../assets/survey-flm.json";

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
    var startChoiceArray = [
      { value: 1, text: "Step 2 : " + fpoJson.title },
      { value: 2, text: "Step 3 : " + flmJson.title }
    ];

    var formIndexArray = [];

    var startJson = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "checkbox",
              name: "forms",
              title: "Which forms apply to you",
              choices: startChoiceArray
            }
          ],
          title: "Select your forms"
        }
      ],
      title: "Start Your Application"
    };

    startChoiceArray.forEach(element => {
      formIndexArray.push(element.value);
    });

    var startJsonData = { forms: formIndexArray };

    var surveyArray = [
      {
        json: startJson,
        data: startJsonData,
        icon: "fa-headphones",
        pageIndex: 0,
        selected: true,
        completed: false
      },
      {
        json: fpoJson,
        data: {},
        icon: "fa-users",
        pageIndex: 0,
        selected: true,
        completed: false
      },
      {
        json: flmJson,
        data: {},
        icon: "fa-anchor",
        pageIndex: 0,
        selected: true,
        completed: false
      }
    ];

    this.$store.dispatch("setSurveyArray", surveyArray);
    this.$store.dispatch("setSurveyIndex", 0);
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/common";
</style>
