<template>
  <div class="fill-height-lg survey-container contentcontainer codecontainer">
    <h1>Case Management form</h1>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>
</template>

<script>
export default {
  name: "CaseMgmt",
  data: function() {
    return {
      message: "This is a case management form",
      message2: "coming soon"
    };
  }
};
</script>

