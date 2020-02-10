<template>
  <div id="app">
    <!--HelloWorld msg="Welcome to Your Vue.js App" /-->
    <SurveyComponent />
    <hr />
    <h2>Survey Creator Component</h2>
    <!-- SurveyCreator msg="The survey creator goes here" /-->
    <hr />
  </div>
</template>

<script>
import SurveyComponent from "./components/SurveyComponent.vue";

export default {
  name: "app",
  components: {
    //HelloWorld,
    //Survey,
    SurveyComponent
    //SurveyCreator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
