<template>
  <div class="fill-height-lg survey-container contentcontainer codecontainer">
    <h1>Child relocation form</h1>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>
</template>

<script>
export default {
  name: "ChildRelocation",
  data: function() {
    return {
      message: "This is a relocation form",
      message2: "a child relocation form"
    };
  }
};
</script>
