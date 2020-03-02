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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #5c42b9;
}
.contentcontainer {
  min-height: 40em;
}
</style>
