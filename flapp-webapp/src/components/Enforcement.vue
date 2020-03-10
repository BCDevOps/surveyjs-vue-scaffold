<template>
  <div class="fill-height-lg survey-container contentcontainer codecontainer">
    <h1>Enforcement form</h1>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>
</template>

<script>
export default {
  name: "Enforcement",
  data: function() {
    return {
      message: "This is an enforcement form",
      message2: "coming soon"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>