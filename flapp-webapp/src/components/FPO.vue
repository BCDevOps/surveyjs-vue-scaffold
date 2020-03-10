<template>
  <div
    class="fill-height-lg survey-container contentcontainer codecontainer"
    id="fpostage"
  >
    <h2>FPO form</h2>
    <b-container class="fill-body">
      <survey :survey="survey"></survey>
      <!--div id="surveyResult"></div-->
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import surveyPrimaryJSON from "../assets/survey-primary.json";
import { addQuestionTypes } from "./question-types.ts";

SurveyVue.StylesManager.applyTheme("bcgov");
addQuestionTypes(SurveyVue);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "FPO",
  data() {
    var survey = new SurveyVue.Model(surveyPrimaryJSON);
    // console.log(survey.title);
    // console.log(survey.PageCount);
    // console.log(survey.pages[0].title);
    // console.log(survey.pages[1].title);
    var step_index = 0;
    // for (page in survey.pages) {
    //   page_title = survey.pages[page].title;
    //   console.log(page_title);
    // }
    //console.log("surveyPrimaryJSON = " + JSON.stringify(surveyPrimaryJSON, null, 3));
    console.log(survey);
    survey.completeText = "Next";
    return {
      survey: survey,
      stage: {
        title: survey.title,
        id: "fpo-group",
        steps: [
          {
            title: survey.pages[0].title,
            step_index: 0,
            step_id: "fpo-group-0"
          },
          {
            title: survey.pages[1].title,
            step_index: 1,
            step_id: "fpo-group-1"
          },
          {
            title: "FPO's third step",
            step_index: 2,
            step_id: "fpo-group-2"
          }
        ]
      }
    };
  },
  created() {
    this.$emit("updated-fpo-stage-details", this.stage);
  },
  methods: {},
  props: {
    step: String
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
</style>
