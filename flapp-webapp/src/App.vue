<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Survey msg="The survey goes here" />
    <SurveyCreator msg="The survey creator goes here" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Survey from "./components/Survey.vue";
import SurveyCreator from "./components/SurveyCreator.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Survey,
    SurveyCreator
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
