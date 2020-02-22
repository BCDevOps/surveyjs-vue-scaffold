<template>
  <div id="app">
    <Navbar />
    <!-- <HelloWorld /> -->
    <!--<Cards />
    <ApplicantInfo />
    <ApplicantExperience />
    <SurveyCreatorComponent /> -->
    <HeavySurvey />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ApplicantInfo from "./components/ApplicantInfo.vue";
import ApplicantExperience from "./components/ApplicantExperience.vue";
import RespondentInfo from "./components/RespondentInfo.vue";

import RespondentRemedy from "./components/RespondentRemedy.vue";
//import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import Footer from "./components/Footer.vue";
import Cards from "./components/Cards.vue";
import HeavySurvey from "./components/HeavySurvey.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    //HelloWorld,
    //ApplicantInfo,
    //ApplicantExperience
    //RespondentInfo,
    //RespondentRemedy
    //SurveyCreatorComponent
    //Cards
    HeavySurvey
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  margin-top: 60px;
}
</style>
