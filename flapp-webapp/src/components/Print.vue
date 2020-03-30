<template>
  <div
    class="fill-height-lg survey-primary fill-body"
    id="surveyselector"
    style="margin: 10px 10px;"
  >
    <h2>You have completed the survey</h2>
    <button type="submit" class="btn btn-primary btn-lg">
      <span class="fa fa-print btn-icon-left"></span> Print Your Application
    </button>
  </div>
</template>

<script>
export default {
  name: "Print",
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
  props: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";
@import "../styles/survey";

.fill-body {
  height: 100%;
}
</style>
