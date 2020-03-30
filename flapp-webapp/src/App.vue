<template>
  <div class="app-outer fill-body" id="app">
    <FlappSurveys></FlappSurveys>
  </div>
</template>

<script>
import FlappSurveys from "./components/FlappSurveys.vue";

export default {
  name: "app",
  components: {
    FlappSurveys
  },

  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "styles/common";
@import "styles/styles";

.fill-body {
  height: 100%;
}
</style>
