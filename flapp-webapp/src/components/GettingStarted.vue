<template>
  <div
    class="fill-height-lg survey-container contentcontainer codecontainer"
    id="fpocomponent"
  >
    <h2>Getting Started</h2>
    <b-container class="fill-body">
      <survey :survey="survey"></survey>
      <!--div id="surveyResult"></div-->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import { addQuestionTypes } from "./question-types.ts";

SurveyVue.StylesManager.applyTheme("bcgov");
addQuestionTypes(SurveyVue);

var surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          title: "Which forms apply to you",
          choices: [
            { value: "item1", text: "Family protection order" },
            { value: "item2", text: "Family law matter" },
            { value: "item3", text: "Child relocation" },
            { value: "item4", text: "Parenting arrangements" },
            { value: "item5", text: "Case management" },
            { value: "item6", text: "Enforcement" }
          ]
        }
      ],
      title: "Select your forms"
    }
  ]
};

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "GettingStarted",
  data() {
    var survey = new SurveyVue.Model(surveyJSON);
    //console.log("surveyPrimaryJSON = " + JSON.stringify(surveyPrimaryJSON, null, 3));
    return { survey: survey };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_survey.scss";

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

/*
 * imported from survey.components.scss
 */

// utility navigation
.survey-cache-info {
  padding: 0 1.5em;
  position: absolute;
  right: 0;
}
// util nav items, profile, log-out button
button.util-nav,
a.util-nav {
  background: none;
  border: none;
  padding-top: 0.65em;
  font-size: 16px;
  /*&:hover {
    color: $gov-mid-blue;
  }*/
}
button.util-nav {
  &:before {
    content: " | ";
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
a.util-nav {
  text-decoration: none;
}

.cache-time {
  padding-right: 1em;
  color: $gov-navy-blue;
}

.survey-nav-left,
.survey-nav-right {
  display: inline-block;
}
.survey-nav-left {
  margin-right: 1em;
}
.btn-primary {
  border-color: #ccc;
}
.contentcontainer {
  min-height: 40em;
}
</style>
