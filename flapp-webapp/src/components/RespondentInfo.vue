<template>
  <div id="RespondentInfo">
    <h2>Who did this?</h2>
    <survey :survey="survey"></survey>
    <!--div id="surveyResult"></div-->
    <RespondentRemedy></RespondentRemedy>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import RespondentRemedy from "./RespondentRemedy";
//let Survey = SurveyVue.Survey;
//import Survey from "survey-vue";

/* import Vue from "vue";
import Survey from "survey-vue";*/

SurveyVue.StylesManager.applyTheme("bootstrap");

var surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "question1", title: "First and last name" }
      ],
      title: "Name the person(s) involved"
    }
  ]
};

//var survey = new Survey(surveyJSON);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "RespondentInfo",
  data() {
    var survey = new SurveyVue.Model(surveyJSON);
    return { survey: survey };
  },
  components: {
    RespondentRemedy
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
