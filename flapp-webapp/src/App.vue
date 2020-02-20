<template>
  <div id="app">
    <Navbar />
    <!-- <HelloWorld /> -->
    <Cards />
    <SurveyComponent />
    <SurveyCreatorComponent />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SurveyComponent from "./components/SurveyComponent.vue";
import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import Footer from "./components/Footer.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
    //HelloWorld,
    SurveyComponent,
    SurveyCreatorComponent
    //Cards
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  margin-top: 60px;
}
</style>
