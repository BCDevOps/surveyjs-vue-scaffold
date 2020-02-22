<template>
  <div id="ApplicantInfo">
    <b-container>
      <h2>Applicant information</h2>
      <h4>Tell us about yourself</h4>
      <survey :survey="survey"></survey>
      <!--div id="surveyResult"></div-->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
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
        {
          type: "multipletext",
          name: "question1",
          title: "Additional information",
          titleLocation: "hidden",
          items: [
            { name: "text1", title: "Name" },
            { name: "text2", title: "Email" },
            { name: "text2", title: "Phone number" },
            { name: "text2", title: "Home address" }
          ]
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
  name: "ApplicantInfo",
  data() {
    var survey = new SurveyVue.Model(surveyJSON);
    return { survey: survey };
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
