<template>
  <div id="surveyComponent">
    <hr />
    <h2>Survey Component</h2>
    <survey :survey="survey"></survey>
    <!--div id="surveyResult"></div-->
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
//let Survey = SurveyVue.Survey;
//import Survey from "survey-vue";

/* import Vue from "vue";
import Survey from "survey-vue";*/

SurveyVue.StylesManager.applyTheme("@bcgov/bootstrap-theme");

var surveyJSON = {
  title: "Tell us, what technologies do you use?",
  pages: [
    {
      name: "page1",
      questions: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "frameworkUsing",
          title: "Do you use any front-end framework like Bootstrap?"
        },
        {
          type: "checkbox",
          choices: ["Bootstrap", "Foundation"],
          hasOther: true,
          isRequired: true,
          name: "framework",
          title: "What front-end framework do you use?",
          visibleIf: "{frameworkUsing} = 'Yes'"
        }
      ]
    },
    {
      name: "page2",
      questions: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          isRequired: true,
          name: "mvvmUsing",
          title: "Do you use any MVVM framework?"
        },
        {
          type: "checkbox",
          choices: ["AngularJS", "KnockoutJS", "React"],
          hasOther: true,
          isRequired: true,
          name: "mvvm",
          title: "What MVVM framework do you use?",
          visibleIf: "{mvvmUsing} = 'Yes'"
        }
      ]
    },
    {
      name: "page3",
      questions: [
        {
          type: "comment",
          name: "about",
          title:
            "Please tell us about your main requirements for Survey library"
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
  name: "SurveyComponent",
  data() {
    var survey = new SurveyVue.Model(surveyJSON);
    return { survey: survey };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
