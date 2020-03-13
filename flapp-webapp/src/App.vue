<template>
  <div class="app-outer fill-body" id="app">
    <SurveyControl></SurveyControl>
  </div>
</template>

<script>
import SurveyControl from "./components/SurveyControl.vue";

export default {
  name: "app",
  components: {
    SurveyControl
  },

  data() {
    return {};
  }
};
</script>
