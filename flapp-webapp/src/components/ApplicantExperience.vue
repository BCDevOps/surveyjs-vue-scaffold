<template>
  <div id="ApplicantExperience">
    <b-container>
      <h2>What happened to you?</h2>
      <survey :survey="survey"></survey>
      <RespondentInfo></RespondentInfo
    ></b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import RespondentInfo from "./RespondentInfo";
//let Survey = SurveyVue.Survey;
//import Survey from "survey-vue";

/* import Vue from "vue";
import Survey from "survey-vue";*/

SurveyVue.StylesManager.applyTheme("bcgov");

var surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "comment",
          name: "question1",
          title: "Please describe your experience",
          isRequired: true
        }
      ]
    }
  ]
};
//var survey = new Survey(surveyJSON);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "ApplicantExperience",
  data() {
    var survey = new SurveyVue.Model(surveyJSON);
    return { survey: survey };
  },
  components: {
    RespondentInfo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 60px 60px 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 100px 100px;
}
a {
  color: #100000;
}
</style>
